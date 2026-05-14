import { Brain, Zap, Target, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerV: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemV: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  const highlights = [
    { icon: Brain, title: "AI Agent Architect", description: "Multi-agent systems & RAG pipelines" },
    { icon: Zap, title: "Automation Expert", description: "50+ node n8n enterprise workflows" },
    { icon: Target, title: "SaaS Builder", description: "Full-stack AI products, concept to deploy" },
    { icon: Rocket, title: "Rapid Shipper", description: "3 AI products in 6 months" },
  ];

  return (
    <section id="about" className="py-24 relative bg-white dark:bg-background scroll-mt-28">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-purple-100 dark:bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <motion.div className="space-y-6" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerV}>
            <motion.div variants={itemV}>
              <div className="liquid-glass-pill gap-2 px-4 py-1.5 text-accent text-xs font-mono tracking-widest uppercase mb-4">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                AI & Automation Developer building{" "}
                <span className="gradient-text drop-shadow-lg">multi-agent systems</span>
              </h2>
            </motion.div>

            <motion.p variants={itemV} className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm Tejass Sapara — a BCA student from Gujarat who skipped the generic tutorial loop and went straight to building production AI systems. I specialize in multi-agent SaaS architectures, complex n8n workflow automation, and shipping AI products at startup speed.
            </motion.p>

            <motion.p variants={itemV} className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My approach: bridge the gap between raw AI capabilities and real business outcomes. Whether it's orchestrating autonomous agents for recruitment (CoreNexa), building desktop AI orchestrators (MAHI AI), or leading teams at national hackathons — I engineer systems that work without human babysitting.
            </motion.p>

            <motion.div variants={itemV} className="space-y-4 pt-4">
              {[
                { emoji: "🤖", title: "Currently Shipping", desc: "CoreNexa — AI Recruitment SaaS" },
                { emoji: "⚡", title: "Deep Diving Into", desc: "Autonomous agents, multi-agent architectures, agentic RAG" },
                { emoji: "🏆", title: "Recent Achievement", desc: "Team Leader at Smart India Hackathon 2025" },
                { emoji: "🚀", title: "Track Record", desc: "3 AI products shipped in 6 months" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-1">{item.emoji}</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Highlight Cards */}
          <motion.div className="grid grid-cols-2 gap-4" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerV}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemV}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.3 }}
                className="liquid-glass-interactive rounded-2xl !p-5 group"
              >
                <item.icon className="h-7 w-7 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
