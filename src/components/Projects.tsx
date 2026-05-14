import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X, Zap, ArrowRight, Brain, Database, Users, Mic, Search, Bot, Cpu, Eye, Video, Github } from "lucide-react";

type FlowStep = { icon: typeof Brain; label: string; desc: string; color: string };
type Project = {
  title: string; status: string; statusColor: string; date: string;
  subtitle: string; description: string; outcomes: string[];
  tech: string[]; accentColor: string; size: "full" | "half";
  flow?: FlowStep[]; links?: { demo: string; code?: string };
  coverClass?: string; codeLabel?: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "CoreNexa",
    status: "Research Prototype", statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    date: "2026", subtitle: "AI Recruitment Engine",
    description: "Autonomous AI Recruitment Engine built with n8n, Groq LLaMA, and Apify. Evaluates and scores candidates against strict job requirements, completely eliminating initial manual screening.",
    outcomes: [
      "Multi-agent architecture spanning 3 business departments",
      "Automated workflow logic for HR, Finance & Sales pipelines",
      "Live demo presented to University VC and Chairman",
      "End-to-end autonomous decision-making across departments",
    ],
    tech: ["n8n", "OpenAI", "Multi-Agent", "Supabase", "React", "RAG"],
    accentColor: "purple", size: "full",
    flow: [
      { icon: Users, label: "Dept. Input", desc: "HR / Finance / Sales", color: "purple" },
      { icon: Brain, label: "Agent Router", desc: "Multi-Agent Core", color: "blue" },
      { icon: Database, label: "Data Layer", desc: "Supabase + RAG", color: "cyan" },
      { icon: Bot, label: "Auto Execute", desc: "Workflow Actions", color: "emerald" },
    ],
    links: { demo: "/enterprise-multi-agent-demo.mp4" },
    githubUrl: "https://github.com/tejassapara61-stack/corenexta",
  },
  {
    title: "NobleBot",
    status: "University Initiative", statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    date: "2025", subtitle: "RAG-Powered Admission Assistant",
    description: "RAG-Powered University Admission Assistant engineered with Pinecone and OpenAI. Automates Tier-1 support queries by referencing 500+ policy documents, operating 24/7.",
    outcomes: [
      "Trained on 500+ university policy documents",
      "Automates Tier-1 support: fees, syllabus, admissions",
      "Real-time RAG retrieval via Pinecone vector search",
      "Significantly reduced administrative workload",
    ],
    tech: ["n8n", "Pinecone", "OpenAI", "RAG", "Web Chat"],
    accentColor: "blue", size: "half",
    flow: [
      { icon: Search, label: "Student Query", desc: "Web Chat", color: "blue" },
      { icon: Database, label: "Vector Search", desc: "Pinecone RAG", color: "purple" },
      { icon: Bot, label: "AI Response", desc: "Verified Answer", color: "emerald" },
    ],
    links: { demo: "#" },
  },
  {
    title: "AdGenius & Visionary Agent",
    status: "AI Automation Workflows", statusColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    date: "2025–2026", subtitle: "Generative Video Marketing + Real Estate Listing Engine",
    description: "Built a generative video marketing engine (AdGenius) integrating AI video models to automate ad creation from text scripts. Developed a zero-touch real estate listing generator (Visionary Agent) using Gemini Vision to optimize listing creation time.",
    outcomes: [
      "AdGenius: text script → AI-generated video ads pipeline",
      "Visionary Agent: zero-touch real estate listings via Gemini Vision",
      "End-to-end automation — no manual touchpoints",
      "Integrated AI video models for UGC-style ad generation",
    ],
    tech: ["n8n", "Gemini Vision", "AI Video", "ElevenLabs", "Automation"],
    accentColor: "pink", size: "half",
    flow: [
      { icon: Video, label: "Text Script", desc: "Marketing Copy", color: "purple" },
      { icon: Eye, label: "Vision AI", desc: "Gemini Analysis", color: "blue" },
      { icon: Bot, label: "Auto Generate", desc: "Video / Listing", color: "emerald" },
    ],
    links: { demo: "#" },
    githubUrl: "https://github.com/tejassapara61-stack",
  },
  {
    title: "MAHI AI 1.2.0",
    status: "v1.2.0 Shipped", statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    date: "November 2025", subtitle: "Desktop AI Assistant",
    description: "Locally hosted desktop AI assistant orchestrating multiple autonomous agents to streamline file operations, data retrieval, and system commands via natural language.",
    outcomes: [
      "Locally hosted — full privacy, no cloud dependency",
      "Natural language command interface (voice + text)",
      "Multi-agent orchestration for desktop workflows",
      "Audit-ready activity logs for governance",
    ],
    tech: ["Python", "RAG", "OpenAI", "Multi-Agent", "Whisper"],
    accentColor: "cyan", size: "half",
    flow: [
      { icon: Mic, label: "Voice Input", desc: "Whisper STT", color: "blue" },
      { icon: Brain, label: "Orchestrator", desc: "Agent Router", color: "purple" },
      { icon: Database, label: "RAG + Search", desc: "Knowledge Base", color: "cyan" },
    ],
    links: { demo: "#" },
    githubUrl: "https://github.com/tejassapara61-stack/mahi-1.0",
  },
  {
    title: "Shree Laxminarayan Ayurveda",
    status: "Freelance — Live Client", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    date: "2025", subtitle: "Commercial Website for Garuda Ayurveda",
    description: "Independently developed and deployed a commercial Ayurveda healthcare platform. Managed end-to-end delivery including custom UI architecture, domain configuration, and scalable hosting.",
    outcomes: [
      "Live production site for a real paying client",
      "Full end-to-end delivery: design → development → deployment",
      "Domain configuration and Netlify hosting setup",
      "Responsive, SEO-optimized commercial website",
    ],
    tech: ["React", "Tailwind CSS", "Netlify", "SEO", "Responsive Design"],
    accentColor: "emerald", size: "half",
    links: { demo: "#" },
    liveUrl: "https://shreelaxminarayanayurveda.com/",
  },
  {
    title: "Green-GO: AI-Powered AgTech Platform",
    status: "AgTech Platform", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    date: "2026", subtitle: "AI Agriculture Intelligence Suite",
    description: "A smart agricultural platform empowering farmers with AI-powered crop disease detection, intelligent crop planning, real-time weather monitoring, and government scheme awareness.",
    outcomes: [
      "AI disease detection for crop health",
      "Crop planning optimization and insights",
      "Secure auth with real-time data updates",
    ],
    tech: ["React", "Tailwind CSS", "Firebase", "Python", "AI Vision"],
    accentColor: "emerald", size: "half",
    coverClass: "bg-gradient-to-br from-emerald-900/40 via-[#111] to-black",
    links: { demo: "#" },
    githubUrl: "https://github.com/tejassapara61-stack/green-GO",
  },
];

const colorMap: Record<string, string> = {
  purple: "bg-purple-500/15 text-purple-400",
  blue: "bg-blue-500/15 text-blue-400",
  cyan: "bg-cyan-500/15 text-cyan-400",
  emerald: "bg-emerald-500/15 text-emerald-400",
  pink: "bg-pink-500/15 text-pink-400",
};

const Projects = () => {
  const [sel, setSel] = useState<Project | null>(null);
  const [demoProject, setDemoProject] = useState<Project | null>(null);
  const demoPoster = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1280' height='720' viewBox='0 0 1280 720'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%230b0b0f'/><stop offset='1' stop-color='%23111a2a'/></linearGradient></defs><rect width='1280' height='720' fill='url(%23g)'/><rect x='80' y='80' width='1120' height='560' rx='32' fill='%23101622' stroke='%232a2f3b' stroke-width='2'/><text x='640' y='370' fill='%238b90a0' font-size='44' font-family='Arial, Helvetica, sans-serif' text-anchor='middle'>Enterprise Demo</text></svg>";

  return (
    <section id="projects" className="py-24 relative bg-white dark:bg-background">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-widest uppercase mb-6">
            <Cpu size={14} /> Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Flagship <span className="text-accent drop-shadow-lg">Projects</span></h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">Real AI products shipped. Not tutorials. Not clones. Production systems that solve actual problems.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className={`bento-card group ${p.size === "full" ? "lg:col-span-2" : ""}`}
            >
              {p.coverClass && (
                <div className={`mb-5 h-36 w-full rounded-xl border border-gray-200 dark:border-white/10 ${p.coverClass}`} />
              )}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${p.statusColor}`}>{p.status}</span>
                <span className="text-xs text-gray-600 font-mono">{p.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">{p.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">{p.subtitle}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{p.description}</p>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">Key Outcomes</p>
                <ul className="space-y-2">
                  {p.outcomes.map((o) => (<li key={o} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"><Zap className="mt-0.5 flex-shrink-0 text-yellow-500" size={14} /><span>{o}</span></li>))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">{p.tech.map((t) => (<span key={t} className="tech-tag">{t}</span>))}</div>
              {(p.flow || (p.links && p.links.demo !== "#") || p.githubUrl || p.liveUrl) && (
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-white/5">
                  {p.flow && (
                    <button type="button" onClick={() => setSel(p)} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.15] transition-all">
                      <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>How It Works
                    </button>
                  )}
                  {p.links?.demo !== "#" && (
                    <button type="button" onClick={() => setDemoProject(p)} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.15] transition-all"><Video size={14} /> Watch Demo</button>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.15] transition-all">
                      <Github size={14} /> Code
                    </a>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.15] transition-all">
                      <ExternalLink size={14} /> Live Website
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="bento-card group md:col-span-2"
          >
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="shrink-0">
                <div className="rounded-2xl border-2 border-accent/50 p-1">
                  <img
                    src="/images/tejass-profile.jpeg"
                    alt="Tejass Sapara"
                    className="h-28 w-28 rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">Hi, I'm <span className="text-gray-900 dark:text-white">Tejass Sapara</span>. 👋</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                  My journey into AI didn't start with theory—it started with a need to automate my own tedious tasks. That curiosity quickly turned into a full-blown obsession with multi-agent systems and n8n workflows. Based in Gujarat, I build AI architectures because I believe humans should do creative work, not robotic tasks. When I'm not vibe-coding or orchestrating LLMs, I'm usually pushing the limits of what autonomous agents can achieve.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.75 9.5H6.5V17H8.75V9.5ZM7.62 6.5A1.13 1.13 0 0 0 6.5 7.62C6.5 8.24 7 8.75 7.62 8.75C8.25 8.75 8.75 8.24 8.75 7.62C8.75 7 8.25 6.5 7.62 6.5ZM17.5 12.5C17.5 10.57 16.46 9.25 14.63 9.25C13.65 9.25 12.98 9.78 12.64 10.32H12.61V9.5H10.5C10.53 10.05 10.5 17 10.5 17H12.75V13.5C12.75 12.56 12.93 11.64 14.11 11.64C15.27 11.64 15.29 12.7 15.29 13.56V17H17.5V12.5Z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/tejassapara61-stack"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5C5.73.5.5 5.74.5 12.02C.5 17.1 3.78 21.5 8.36 23.02C8.96 23.13 9.18 22.78 9.18 22.48C9.18 22.22 9.17 21.56 9.17 20.74C5.84 21.47 5.14 19.25 5.14 19.25C4.59 17.86 3.79 17.5 3.79 17.5C2.68 16.74 3.87 16.76 3.87 16.76C5.1 16.85 5.75 18.03 5.75 18.03C6.84 19.91 8.63 19.37 9.32 19.06C9.43 18.26 9.74 17.72 10.08 17.41C7.42 17.11 4.62 16.06 4.62 11.39C4.62 10.06 5.09 8.96 5.86 8.1C5.74 7.79 5.33 6.54 5.97 4.84C5.97 4.84 6.97 4.52 9.17 6.04C10.12 5.78 11.14 5.65 12.17 5.65C13.2 5.65 14.22 5.78 15.17 6.04C17.37 4.52 18.37 4.84 18.37 4.84C19.01 6.54 18.6 7.79 18.48 8.1C19.25 8.96 19.72 10.06 19.72 11.39C19.72 16.07 16.91 17.1 14.24 17.4C14.66 17.76 15.03 18.48 15.03 19.59C15.03 21.18 15.02 22.18 15.02 22.48C15.02 22.78 15.24 23.14 15.85 23.02C20.43 21.5 23.5 17.1 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal */}
        {sel?.flow && (
          <div className="architecture-modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/90 p-4 backdrop-blur-sm" onClick={() => setSel(null)}>
            <div className="architecture-modal-content relative w-full max-w-4xl rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white"><Zap className="text-yellow-500" size={20} />Architecture: {sel.title}</h3>
                <button type="button" onClick={() => setSel(null)} className="rounded-full p-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition"><X size={24} /></button>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 p-12 md:flex-row md:overflow-x-auto">
                {sel.flow.map((step, i) => { const Icon = step.icon; return (
                  <div key={step.label} className="flex items-center">
                    <div className="relative flex w-44 flex-col items-center gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-6 text-center hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300">
                      <div className={`rounded-full p-4 ${colorMap[step.color]}`}><Icon size={28} /></div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white">{step.label}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{step.desc}</p>
                      <div className="absolute -left-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] text-xs font-bold text-gray-600 dark:text-gray-400">{i + 1}</div>
                    </div>
                    {i < sel.flow!.length - 1 && (<><div className="hidden px-3 text-gray-400 md:flex"><ArrowRight size={20} /></div><div className="py-3 text-gray-400 md:hidden"><ArrowRight className="rotate-90" size={20} /></div></>)}
                  </div>
                ); })}
              </div>
              <div className="border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] p-6 text-center text-sm text-gray-600 dark:text-gray-400">Autonomous workflow — zero human touchpoints in the critical path.</div>
            </div>
          </div>
        )}

        {demoProject && (
          <div className="architecture-modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/90 p-4 backdrop-blur-sm" onClick={() => setDemoProject(null)}>
            <div className="architecture-modal-content relative w-full max-w-5xl rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white"><Video className="text-accent" size={20} />Demo: {demoProject.title}</h3>
                <button type="button" onClick={() => setDemoProject(null)} className="rounded-full p-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition"><X size={24} /></button>
              </div>
              <div className="p-6">
                <div className="w-full aspect-video rounded-xl bg-gray-50 dark:bg-card overflow-hidden border border-gray-200 dark:border-white/10 transition-shadow hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <video className="w-full h-full" controls playsInline preload="metadata" poster={demoPoster}>
                    <source src={demoProject.links.demo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
