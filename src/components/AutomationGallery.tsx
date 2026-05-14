import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Check, Download, Eye, X, Workflow, Cpu, ChevronLeft, ChevronRight, ExternalLink, Sparkles } from "lucide-react";

type WorkflowItem = {
  id: number; title: string; description: string; tags: string[];
  accentColor: string; imagePath: string; jsonPath: string; nodeCount?: string; metrics: string[];
};

const workflows: WorkflowItem[] = [
  {
    id: 1,
    title: "CoreNexa AI Recruitment Engine",
    description: "Multi-agent SaaS architecture strictly evaluating candidate bios against job roles using Groq LLaMA and Airtable.",
    tags: ["n8n", "Groq LLaMA", "Apify", "Airtable"],
    accentColor: "#A855F7",
    imagePath: "/images/corenexa-ss.png",
    jsonPath: "/workflows/AI_Recruitment_Engine.json",
    nodeCount: "45+",
    metrics: [
      "Reduced resume screening time by 85%",
      "Evaluates 500+ bios per minute",
      "Eliminates manual initial interview scheduling",
    ],
  },
  {
    id: 2,
    title: "Outbound Lead Qualifier (Vapi AI)",
    description: "Voice AI agent that calls leads, evaluates responses, scores them out of 100, and generates an HTML/PDF report.",
    tags: ["n8n", "Vapi Voice AI", "Javascript", "Airtable"],
    accentColor: "#3B82F6",
    imagePath: "/images/outbound-lead-ss.png",
    jsonPath: "/workflows/Outbound_Lead_Qualifier.json",
    nodeCount: "38+",
    metrics: [
      "Handles 300+ outbound calls/day autonomously",
      "Scores leads instantly out of 100",
      "Saves ~15 hours/week of manual SDR work",
    ],
  },
  {
    id: 3,
    title: "NobleBot Admission Assistant",
    description: "RAG-powered bot handling 8 university departments with memory, VIP ticketing, and HTML email automation.",
    tags: ["n8n", "Gemini", "Google Sheets", "Gmail"],
    accentColor: "#10B981",
    imagePath: "/images/noblebot-ss.png",
    jsonPath: "/workflows/noblebot.json",
    nodeCount: "52+",
    metrics: [
      "Resolves 80% of Tier-1 queries without human intervention",
      "Trained on 500+ university docs for 24/7 support",
      "Saved administration ~20 hours/week during admissions",
    ],
  },
  {
    id: 4,
    title: "Ultimate Media & Social Agent",
    description: "Master agent routing tasks to sub-agents for Google Drive management, calendar booking, and auto-posting on X/Instagram.",
    tags: ["n8n", "LangChain Agents", "Telegram", "OpenAI"],
    accentColor: "#EC4899",
    imagePath: "/images/media-agent-ss.png",
    jsonPath: "/workflows/Ultimate_Media_Agent.json",
    nodeCount: "60+",
    metrics: [
      "Automated cross-platform posting for 4 platforms",
      "Saves ~10 hours/week on content distribution",
      "Zero-touch calendar booking integration",
    ],
  },
  {
    id: 5,
    title: "AI-Powered B2B Lead Scoring",
    description: "Fetches Apollo/ZoomInfo leads, scores them via GPT-4, updates HubSpot, and alerts sales teams on Slack.",
    tags: ["n8n", "Apify", "HubSpot", "Slack"],
    accentColor: "#06B6D4",
    imagePath: "/images/b2b-scoring-ss.png",
    jsonPath: "/workflows/AI_B2B_Lead_Scoring.json",
    nodeCount: "35+",
    metrics: [
      "Enriches and scores 1000+ leads daily",
      "Prioritizes top 10% leads for sales team",
      "Triggers instant Slack alerts for 'Hot' leads",
    ],
  },
  {
    id: 6,
    title: "Google Maps Lead Generator",
    description: "Scrapes Google Maps API for B2B leads with built-in exponential backoff to bypass API rate limits.",
    tags: ["n8n", "Google Maps API", "Google Sheets"],
    accentColor: "#3B82F6",
    imagePath: "/images/gmaps-lead-ss.png",
    jsonPath: "/workflows/Generate_leads_Google_Maps.json",
    nodeCount: "28+",
    metrics: [
      "Extracts 500+ verified local B2B leads daily",
      "Bypasses API rate limits for 100% uptime",
      "Reduces manual prospecting time by ~12 hours/week",
    ],
  },
  {
    id: 7,
    title: "AI Payroll & Payslip Generator",
    description: "Calculates base salary, tax, and unpaid leaves, adds AI remarks, and generates a downloadable PDF payslip.",
    tags: ["n8n", "OpenAI", "HTML-to-PDF", "Airtable"],
    accentColor: "#A855F7",
    imagePath: "/images/payroll-ss.png",
    jsonPath: "/workflows/AI_Payroll_Processing.json",
    nodeCount: "22+",
    metrics: [
      "Processes payroll for 50+ employees in < 5 minutes",
      "Generates PDF payslips with 100% calculation accuracy",
      "Eliminates 100% of manual HR data entry",
    ],
  },
  {
    id: 8,
    title: "Design UI Generator",
    description: "Integrates Google Stitch MCP via Telegram to autonomously generate screens, UI layouts, and convert MD to HTML.",
    tags: ["n8n", "Google Stitch MCP", "Gemini"],
    accentColor: "#10B981",
    imagePath: "/images/design-ui-ss.png",
    jsonPath: "/workflows/Design_UI_projects.json",
    nodeCount: "30+",
    metrics: [
      "Converts raw ideas to structural UI screens in < 2 minutes",
      "Saves ~4 hours per project in wireframing",
      "Fully autonomous markdown-to-HTML conversion",
    ],
  },
];

const containerV: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const cardV: Variants = { hidden: { opacity: 0, y: 40, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

/* ── Single Card ── */
function WorkflowCard({ workflow, onView }: { workflow: WorkflowItem; onView: () => void }) {
  const [hovered, setHovered] = useState(false);
  const c = workflow.accentColor;

  return (
    <motion.div variants={cardV} className="group relative"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-2xl transition-all duration-500 flex flex-col h-full bg-white dark:bg-[#111] border border-gray-200 dark:border-white/[0.06] shadow-sm dark:shadow-none"
        style={{
          borderColor: hovered ? `${c}66` : undefined,
          boxShadow: hovered ? `0 0 40px ${c}26, 0 20px 40px -15px rgba(0,0,0,0.6)` : undefined,
          transform: hovered ? "translateY(-4px)" : undefined,
        }}
      >
        {/* Gradient tint on hover */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${c}0D, transparent)`, opacity: hovered ? 1 : 0 }} />

        {/* Screenshot */}
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#111] via-transparent to-transparent z-10 pointer-events-none" />
          <img src={workflow.imagePath} alt={`${workflow.title} — n8n workflow canvas`}
            className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy" />

          {/* Hover overlay */}
          <div className="absolute inset-0 z-20 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button type="button" onClick={onView}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white dark:text-gray-900 text-sm font-semibold hover:bg-accent/80 transition-all shadow-[0_0_20px_rgba(var(--color-accent),0.3)]">
              <Eye size={15} /> View Architecture
            </button>
          </div>

          {/* Badges */}
          {workflow.nodeCount && (
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 dark:bg-black/70 backdrop-blur-md border border-white/20 dark:border-white/10 text-xs font-mono text-white dark:text-gray-300">
              <Cpu size={11} className="text-accent" />{workflow.nodeCount} nodes
            </div>
          )}
          <div className="absolute top-3 left-3 z-20 flex items-center justify-center w-7 h-7 rounded-lg bg-black/40 dark:bg-black/70 backdrop-blur-md border border-white/20 dark:border-white/10 text-xs font-bold text-white dark:text-gray-300">
            {String(workflow.id).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col relative z-10">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">{workflow.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">{workflow.description}</p>

          <div className="rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 p-3 mb-4">
            <ul className="space-y-2">
              {workflow.metrics.map((metric) => (
                <li key={metric} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <Check size={12} className="mt-0.5 flex-shrink-0 text-accent" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {workflow.tags.map((tag) => (
              <span key={tag} className="tech-tag text-[11px]">{tag}</span>
            ))}
          </div>

          <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-white/5">
            <a href={workflow.jsonPath} download
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.15] transition-all">
              <Download size={14} /> Download JSON
            </a>
            <button type="button" onClick={onView}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.15] transition-all">
              <Eye size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
const AutomationGallery = () => {
  const [lightbox, setLightbox] = useState<WorkflowItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nav = (dir: "prev" | "next") => {
    if (!lightbox) return;
    const i = workflows.findIndex((w) => w.id === lightbox.id);
    setLightbox(dir === "next" ? workflows[(i + 1) % workflows.length] : workflows[(i - 1 + workflows.length) % workflows.length]);
  };

  return (
    <section id="automations" className="py-24 relative bg-gray-50 dark:bg-background">
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[350px] h-[350px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-widest uppercase mb-6">
            <Workflow size={14} /> n8n Architecture Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Automation <span className="text-accent drop-shadow-lg">Architecture Gallery</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">Production-grade n8n workflows and multi-agent systems I have architected. Each workflow is downloadable as a JSON file.</p>
          <div className="flex items-center justify-center gap-8 mt-8">
            {[{ value: "8", label: "Workflows" }, { value: "310+", label: "Total Nodes" }, { value: "100%", label: "Production" }].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold text-accent">{s.value}</span>
                <span className="text-xs text-gray-500 dark:text-gray-600 font-mono uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerV} initial="hidden" animate={isInView ? "show" : "hidden"}>
          {workflows.map((w) => <WorkflowCard key={w.id} workflow={w} onView={() => setLightbox(w)} />)}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.8 }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06]">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              All workflows are <span className="text-gray-900 dark:text-white font-semibold">production-tested</span> &amp; ready to <span className="text-accent font-semibold">import into n8n</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/90 backdrop-blur-sm p-4" onClick={() => setLightbox(null)} style={{ animation: "fade-in 0.2s ease-out" }}>
          <div className="relative w-full max-w-5xl rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ animation: "slide-up 0.3s ease-out" }}>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20"><Workflow size={16} className="text-accent" /></div>
                <div><h3 className="text-lg font-bold text-gray-900 dark:text-white">{lightbox.title}</h3><p className="text-xs text-gray-500 mt-0.5">{lightbox.nodeCount} nodes • n8n Canvas View</p></div>
              </div>
              <div className="flex items-center gap-2">
                <a href={lightbox.jsonPath} download className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white dark:text-gray-900 text-sm font-semibold hover:bg-accent/80 transition-all shadow-[0_0_20px_rgba(var(--color-accent),0.2)]"><Download size={14} /> Download</a>
                <button type="button" onClick={() => setLightbox(null)} className="rounded-full p-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition"><X size={22} /></button>
              </div>
            </div>
            <div className="relative bg-gray-100 dark:bg-[#0a0a0a]">
              <img src={lightbox.imagePath} alt={`${lightbox.title} — full architecture view`} className="w-full max-h-[70vh] object-contain" />
              <button type="button" onClick={() => nav("prev")} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/60 dark:bg-black/60 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-black/80 transition-all backdrop-blur-md"><ChevronLeft size={20} /></button>
              <button type="button" onClick={() => nav("next")} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/60 dark:bg-black/60 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-black/80 transition-all backdrop-blur-md"><ChevronRight size={20} /></button>
            </div>
            <div className="border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] px-6 py-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex flex-wrap gap-1.5">{lightbox.tags.map((tag) => <span key={tag} className="tech-tag text-[11px]">{tag}</span>)}</div>
                <a href={lightbox.imagePath} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"><ExternalLink size={13} /> Open full-size</a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AutomationGallery;
