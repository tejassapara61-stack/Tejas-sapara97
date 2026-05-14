import { memo, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

const RotatingPoly = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.35;
  });

  return (
    <mesh ref={meshRef} scale={2.3} position={[0, 0.25, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#60a5fa"
        wireframe
        emissive="#1d4ed8"
        emissiveIntensity={0.15}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

const Orbiters = () => {
  const clusters = useMemo(() => {
    const points: Array<{ position: [number, number, number]; color: string; speed: number }> = [];
    const palette = ["#38bdf8", "#a855f7", "#22d3ee", "#f472b6"];

    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3.4 + Math.random() * 0.8;
      points.push({
        position: [Math.cos(angle) * radius, (Math.random() - 0.5) * 1.2, Math.sin(angle) * radius],
        color: palette[i % palette.length],
        speed: 0.2 + Math.random() * 0.3
      });
    }

    return points;
  }, []);

  return (
    <group>
      {clusters.map((cluster, index) => (
        <FloatingGlyph key={index} {...cluster} />
      ))}
    </group>
  );
};

const FloatingGlyph = ({
  position,
  color,
  speed
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.4;
    meshRef.current.rotation.y = t * 0.75;
  });

  return (
    <mesh ref={meshRef} position={position} scale={0.35}>
      <tetrahedronGeometry args={[1.6, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} metalness={0.1} roughness={0.2} />
    </mesh>
  );
};

const Halo = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]}>
    <ringGeometry args={[4.5, 4.8, 64]} />
    <meshBasicMaterial color="rgba(59,130,246,0.35)" transparent />
  </mesh>
);

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none select-none">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 1.8]}>
        <color attach="background" args={["#020617"]} />
        <fog attach="fog" args={["#020617", 8, 18]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#93c5fd" />
        <directionalLight position={[-4, -3, -2]} intensity={0.6} color="#a855f7" />

        <Suspense fallback={null}>
          <Float speed={0.8} rotationIntensity={0.6} floatIntensity={0.8}>
            <RotatingPoly />
          </Float>
          <Orbiters />
          <Halo />
          <Sparkles
            count={120}
            speed={0.4}
            opacity={0.2}
            color="#38bdf8"
            scale={[10, 6, 10]}
            size={2.5}
          />
          <Stars radius={40} depth={50} count={4000} factor={4} saturation={0} fade speed={0.4} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.28),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.22),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.9),rgba(2,6,23,0.55))]" />
    </div>
  );
};

export default memo(HeroCanvas);
