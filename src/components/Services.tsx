import { Bot, Workflow, Code2, ArrowRight, CheckCircle2, Search, PenTool, Zap, CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const containerV: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const itemV: Variants = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

const services = [
  { icon: Workflow, title: "Workflow Automation", subtitle: "For Operations & Internal Teams", description: "I replace your manual back-office tasks with autonomous n8n workflows. Connect your CRM, Email, and Spreadsheets to run on auto-pilot.",
    features: ["Automated Lead Qualification & Data Entry", "Invoice Processing & Financial Ops", "Cross-platform Data Sync (HubSpot ↔ Airtable)", "Zero-Human-Touch Operational Pipelines"] },
  { icon: Bot, title: "Smart AI Agents", subtitle: "For Customer-Facing Growth", description: "Deploy AI agents on WhatsApp, Telegram, or your Website that sell products, book appointments, and answer support queries 24/7.",
    features: ["WhatsApp/Telegram Sales Concierge", "24/7 Customer Support Auto-Pilot", "Multi-language Voice & Text Agents", "Instant Booking & Calendar Management"] },
  { icon: Code2, title: "Custom AI SaaS Build", subtitle: "For Founders & Startups", description: "I build complete, scalable AI products from scratch. From the React frontend to the RAG backend — your AI idea becomes a sellable SaaS.",
    features: ["Full-Stack Dev (React, Node, Supabase)", "Custom RAG & Vector Database Setup", "Stripe Payment Integration", "User Auth & Multi-Tenant Architecture"] },
];

const processSteps = [
  { icon: Search, title: "Discovery", desc: "15-min audit call" },
  { icon: PenTool, title: "Blueprint", desc: "Architecture design" },
  { icon: Zap, title: "Rapid Build", desc: "MVP in 7-14 days" },
  { icon: CheckCircle, title: "Handover", desc: "Deploy + 30-day support" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100 dark:bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            How I Can <span className="gradient-text">Help You</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need to save time internally or build a product to sell, I have a specialized solution for you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={containerV}>
          {services.map((service, index) => (
            <motion.div key={index} className="bento-card group" variants={itemV} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.10]">
                <service.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">{service.title}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">{service.subtitle}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 size={14} className="mt-1 text-accent flex-shrink-0" /><span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] hover:bg-gray-200 dark:hover:bg-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.15] transition-all">
                Start This Project <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Strip */}
        <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              From Chaos to <span className="gradient-text">Autonomy</span> in 4 Steps
            </h3>
            <p className="text-gray-500 dark:text-gray-500 text-sm">No complex contracts. No bloated timelines. Just results.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <motion.div key={index} className="flex flex-col items-center text-center group p-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform relative bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.10]">
                  <step.icon size={22} className="text-accent" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-white dark:bg-card border border-gray-200 dark:border-white/[0.10]">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{step.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
