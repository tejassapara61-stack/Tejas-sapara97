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
    links: { demo: "https://youtu.be/9a-DgRYTRyk" },
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
                  {demoProject.links?.demo?.includes("youtube.com") || demoProject.links?.demo?.includes("youtu.be") ? (
                    <iframe
                      className="w-full h-full"
                      src={demoProject.links.demo.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video className="w-full h-full" controls playsInline preload="metadata" poster={demoPoster}>
                      <source src={demoProject.links?.demo} type="video/mp4" />
                    </video>
                  )}
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
