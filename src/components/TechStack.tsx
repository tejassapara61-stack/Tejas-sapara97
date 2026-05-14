import { Brain, Workflow, Code2, Zap, Sparkles, Monitor, MessageSquare, Palette } from 'lucide-react';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerV: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemV: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const bentoCards: {
  id: string; title: string; description: string; icon: any; accentColor: string;
  size: "large" | "wide" | "normal";
  techLogos: { name: string; logo: string | React.ReactNode; invertInDark?: boolean }[];
}[] = [
  {
    id: "ai-agents", title: "AI & Agents",
    description: "Building multi-agent systems, RAG architectures, and agentic pipelines that think, decide, and act autonomously — powering real products.",
    icon: Brain, accentColor: "purple", size: "large",
    techLogos: [
      { name: "n8n", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/n8n-color.svg" },
      { name: "Make.com", logo: "https://api.iconify.design/simple-icons/make.svg?color=%236C4AB6" },
      { name: "OpenAI API", logo: "https://api.iconify.design/simple-icons/openai.svg", invertInDark: true },
      { name: "Gemini Vision", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini-color.svg" },
      { name: "Claude Code", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude-color.svg" },
      { name: "RAG", logo: "https://api.iconify.design/simple-icons/openai.svg", invertInDark: true },
    ],
  },
  {
    id: "rapid-dev", title: "Rapid Dev / Vibe Coding",
    description: "AI-assisted development for blazing-fast MVP deployment. Concept to production in days, not months.",
    icon: Zap, accentColor: "emerald", size: "wide",
    techLogos: [
      { name: "Cursor IDE", logo: "https://api.iconify.design/simple-icons/cursor.svg", invertInDark: true },
      { name: "Claude Opus 4.6", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude-color.svg" },
      { name: "Claude Sonnet 4.6", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude-color.svg" },
      { name: "GitHub Copilot", logo: "https://api.iconify.design/simple-icons/githubcopilot.svg", invertInDark: true },
    ],
  },
  {
    id: "backend-db", title: "Backend & DB",
    description: "Server-side logic, APIs, and database architecture — the invisible engine behind every product.",
    icon: Code2, accentColor: "blue", size: "normal",
    techLogos: [
      { name: "Python", logo: "https://api.iconify.design/logos/python.svg" },
      { name: "Supabase", logo: "https://api.iconify.design/logos/supabase-icon.svg" },
      { name: "Firebase", logo: "https://api.iconify.design/logos/firebase.svg" },
      { name: "MongoDB", logo: "https://api.iconify.design/logos/mongodb-icon.svg" },
    ],
  },
  {
    id: "frontend", title: "Frontend",
    description: "Pixel-perfect, animated interfaces that feel alive and premium.",
    icon: Monitor, accentColor: "cyan", size: "normal",
    techLogos: [
      { name: "React", logo: "https://api.iconify.design/logos/react.svg" },
      { name: "Framer Motion", logo: "https://api.iconify.design/logos/framer.svg" },
      { name: "Tailwind CSS", logo: "https://api.iconify.design/logos/tailwindcss-icon.svg" },
    ],
  },
  {
    id: "ai-chatbots", title: "AI Chatbots",
    description: "Intelligent conversational agents for WhatsApp, Telegram, and custom interfaces tailored to any domain.",
    icon: MessageSquare, accentColor: "green", size: "normal",
    techLogos: [
      { name: "WhatsApp API", logo: "https://api.iconify.design/logos/whatsapp-icon.svg" },
      { name: "Telegram Bot", logo: "https://api.iconify.design/logos/telegram.svg" },
      { name: "Twilio", logo: "https://api.iconify.design/logos/twilio-icon.svg" },
    ],
  },
  {
    id: "ui-ux", title: "UI/UX & Design",
    description: "Crafting beautiful, user-centric interfaces and graphics with modern design tools and AI.",
    icon: Palette, accentColor: "pink", size: "normal",
    techLogos: [
      { name: "Figma", logo: "https://api.iconify.design/logos/figma.svg" },
      { name: "Canva", logo: "https://api.iconify.design/simple-icons/canva.svg?color=%2300C4CC" },
      { name: "Claude AI", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude-color.svg" },
    ],
  },
];

const TechStack = () => {
  const getSizeClass = (size: string) => {
    if (size === "large") return "bento-large";
    if (size === "wide") return "bento-wide";
    return "";
  };

  return (
    <section id="skills" className="py-24 relative bg-gray-50 dark:bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <div className="liquid-glass-pill gap-2 px-4 py-1.5 text-accent text-xs font-mono tracking-widest uppercase mb-6">
            <Sparkles size={14} /> Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            What I <span className="gradient-text drop-shadow-lg">Build With</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Laser-focused on the stack that ships AI products at startup speed.
          </p>
        </motion.div>

        <motion.div className="bento-grid" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={containerV}>
          {bentoCards.map((card) => (
            <motion.div key={card.id} className={`bento-card group ${getSizeClass(card.size)}`} variants={itemV} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }}>
              {/* Ambient glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 dark:bg-accent/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.10]">
                <card.icon size={24} className="text-accent" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6">{card.description}</p>

              {/* Tech logos */}
              <div className="flex flex-wrap gap-3">
                {card.techLogos.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.15] hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-all group/tech">
                    {typeof tech.logo === "string" ? (
                      <div className="relative w-5 h-5 group-hover/tech:scale-110 transition-transform flex-shrink-0">
                        <img src={tech.logo} alt={tech.name} className={`w-full h-full object-contain ${tech.invertInDark ? 'dark:invert' : ''} opacity-80 hover:opacity-100 transition-opacity`} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center group-hover/tech:scale-110 transition-transform flex-shrink-0 text-gray-800 dark:text-white">{tech.logo}</div>
                    )}
                    <span className="text-xs text-gray-600 dark:text-gray-400 group-hover/tech:text-gray-900 dark:group-hover/tech:text-white transition-colors whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
