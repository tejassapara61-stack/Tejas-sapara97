import { Trophy, Users, Brain } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const containerV: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemV: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

const achievements = [
  {
    title: "Convolve 4.0", subtitle: "Pan-IIT AI/ML Hackathon", date: "Jan – Feb 2026",
    description: "Competed in the preliminary round of India's premier AI/ML hackathon, jointly organized by top IITs (Bombay, Madras, Delhi). Demonstrated strong fundamentals in AI/ML problem-solving at a national level.",
    tags: ["AI/ML", "IIT Bombay", "IIT Madras", "IIT Delhi"], icon: Brain,
  },
  {
    title: "Smart India Hackathon (SIH 2025)", subtitle: "Team Leader — Team IT FAB", date: "September 2025",
    description: "Team Leader for Team IT FAB at India's largest student hackathon. Demonstrated technical leadership by architecting the solution, managing team workflows, and presenting to judges — all under strict time constraints.",
    tags: ["Team Leader", "Technical Architecture", "Rapid Prototyping"], icon: Users,
  },
];

const AiLab = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-background relative border-t border-gray-200 dark:border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <div>
            <div className="liquid-glass-pill gap-2 px-4 py-1.5 text-yellow-600 dark:text-yellow-400 text-xs font-mono tracking-widest uppercase mb-3">
              Recognition
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Hackathons & <span className="gradient-text">Achievements</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-sm max-w-sm">
            Proving I can build, lead, and compete at the national level.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={containerV}>
          {achievements.map((item) => (
            <motion.div key={item.title} className="bento-card group" variants={itemV} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.10]">
                  <item.icon size={22} className="text-accent" />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">{item.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Trophy size={14} className="text-yellow-500" />
                <span className="text-xs font-bold text-yellow-600 dark:text-yellow-500/80 uppercase tracking-widest">Achievement</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-500 font-medium mb-3">{item.subtitle}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="liquid-glass-pill text-[10px] uppercase tracking-widest font-bold text-gray-600 dark:text-gray-400 px-2.5 py-1">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AiLab;
