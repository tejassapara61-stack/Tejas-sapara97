import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Zap, Bot, Brain } from "lucide-react";

const orbit1 = [
  { name: "OpenAI", logo: "https://api.iconify.design/simple-icons/openai.svg", angle: 0, invertInDark: true },
  { name: "Anthropic", logo: "https://api.iconify.design/simple-icons/anthropic.svg?color=%23D4A574", angle: 72 },
  { name: "OpenRouter", logo: "https://api.iconify.design/simple-icons/openrouter.svg?color=%236366F1", angle: 216 },
  { name: "OpenClaw", logo: "https://api.iconify.design/lucide/bot.svg?color=%23A855F7", angle: 288 },
];

const orbit2 = [
  { name: "Gemini", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini-color.svg", angle: 45 },
  { name: "Meta", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/meta-color.svg", angle: 135 },
  { name: "Manus", logo: "https://api.iconify.design/lucide:hand.svg?color=%233B82F6", angle: 225 },
  { name: "Perplexity", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/perplexity-color.svg", angle: 315 },
];

const orbit3 = [
  { name: "n8n", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/n8n-color.svg", angle: 0 },
  { name: "Make.com", logo: "https://api.iconify.design/simple-icons:make.svg?color=%236C4AB6", angle: 51.4 },
  { name: "Claude Code", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude-color.svg", angle: 102.8 },
  { name: "HuggingFace", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/huggingface-color.svg", angle: 154.2 },
  { name: "Replicate", logo: "https://api.iconify.design/simple-icons:replicate.svg?color=%233B82F6", angle: 205.7 },
  { name: "Antigravity", logo: "https://api.iconify.design/lucide:rocket.svg?color=%2306B6D4", angle: 257.1 },
  { name: "Cursor", logo: "https://api.iconify.design/simple-icons/cursor.svg", angle: 308.5, invertInDark: true },
];

const stats = [
  { value: "3+", label: "AI Products Shipped" },
  { value: "50+", label: "Node Workflows" },
  { value: "100+", label: "Agents Deployed" }
];

const techMarquee = [
  "n8n", "OpenAI", "Supabase", "React", "Python", "Claude", "Cursor", "Firebase",
  "MongoDB", "Docker", "RAG", "Pinecone",
  "n8n", "OpenAI", "Supabase", "React", "Python", "Claude", "Cursor", "Firebase",
  "MongoDB", "Docker", "RAG", "Pinecone",
];

const containerV: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const itemV: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function orbitItems(
  items: { name: string; logo: string; angle: number; invertInDark?: boolean }[],
  radiusPercent: number,
) {
  return items.map((item) => {
    const rad = (item.angle * Math.PI) / 180;
    const xPct = Math.cos(rad) * radiusPercent;
    const yPct = Math.sin(rad) * radiusPercent;
    return (
      <div key={item.name} className="orbit-item" style={{ position: "absolute", left: `${50 + xPct}%`, top: `${50 + yPct}%`, transform: "translate(-50%,-50%)" }}>
        <div className="orbit-item-inner">
          <img src={item.logo} alt={item.name} className={`w-7 h-7 md:w-9 md:h-9 object-contain drop-shadow-[0_0_8px_rgba(var(--color-accent),0.4)] ${item.invertInDark ? 'dark:invert' : ''} opacity-80 hover:opacity-100 transition-opacity duration-300`} loading="eager" />
          <span className="orbit-item-label">{item.name}</span>
        </div>
      </div>
    );
  });
}

const Hero3D = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="hero" className="relative w-full min-h-screen bg-gray-50 dark:bg-background overflow-hidden flex items-center">
      {/* ambient blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-[140px] animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-20 dark:opacity-30 pointer-events-none" />

      {/* MAIN LAYOUT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
        {/* LEFT: text content */}
        <motion.div className="flex-1 max-w-2xl" variants={containerV} initial="hidden" animate="show">
          {/* badge */}
          <motion.div variants={itemV}>
            <div className="liquid-glass-pill gap-2 px-4 py-1.5 text-accent text-xs font-mono mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              SYSTEMS ONLINE • OPEN TO WORK
            </div>
          </motion.div>

          {/* headline */}
          <motion.h1 variants={itemV} className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.08] tracking-tight">
            Architecting{" "}
            <span className="gradient-text drop-shadow-lg">Autonomous AI Agents</span>
            <br />
            <span className="text-gray-600 dark:text-gray-300">&amp; Scalable Automations</span>
          </motion.h1>

          {/* sub */}
          <motion.p variants={itemV} className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-10 leading-relaxed max-w-xl">
            I build multi‑agent SaaS systems, architect 50+ node n8n workflows,
            and ship AI products at startup speed using vibe coding with Cursor &amp;&nbsp;Claude.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemV} className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-7 py-3.5 font-bold rounded-full flex items-center gap-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-white/[0.10] border border-gray-200 dark:border-white/[0.18] shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-gray-200 dark:hover:bg-white/[0.15]"
            >
              <Bot size={16} />
              View My Work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 font-bold rounded-full flex items-center gap-2 text-sm text-gray-900 dark:text-white bg-white/60 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.10] backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-gray-100 dark:hover:bg-white/[0.08]"
            >
              <Zap size={16} className="text-accent" />
              Deploy an Agent
            </button>
          </motion.div>

          {/* stats */}
          <motion.div variants={itemV} className="liquid-glass-pill flex-wrap gap-8 md:gap-10 px-8 py-5">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: orbital rig */}
        <motion.div className="flex-1 flex items-center justify-center w-full max-w-[520px] lg:max-w-none" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <div className={`orbit-container ${hovered ? "paused" : ""}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className="orbit-center">
              <div className="orbit-center-glow" />
              <div className="orbit-center-icon"><Brain size={32} className="text-accent" /></div>
              <span className="orbit-center-label">AI Agent</span>
            </div>
            <div className="orbit-ring orbit-ring-1" />
            <div className="orbit-ring orbit-ring-2" />
            <div className="orbit-ring orbit-ring-3" />
            <div className="orbit-track orbit-track-1">{orbitItems(orbit1, 20.4)}</div>
            <div className="orbit-track orbit-track-2">{orbitItems(orbit2, 35.2)}</div>
            <div className="orbit-track orbit-track-3">{orbitItems(orbit3, 48.1)}</div>
          </div>
        </motion.div>
      </div>

      {/* TECH MARQUEE */}
      <div className="absolute bottom-0 w-full py-4 overflow-hidden z-30 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border-t border-gray-200 dark:border-white/[0.06]">
        <div className="hero-marquee-track">
          {techMarquee.map((t, i) => (
            <span key={i} className="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-base tracking-widest uppercase opacity-50 hover:opacity-100 hover:text-accent transition-all cursor-default whitespace-nowrap">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
