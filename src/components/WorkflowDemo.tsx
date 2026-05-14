import webhookIcon from "@/assets/nodes/webhook.svg";
import aiAgentIcon from "@/assets/nodes/ai-agent.svg";
import ragIcon from "@/assets/nodes/rag.svg";
const triggers = [
  {
    title: "Inbound Lead / Market Signal",
    description: "Detects new lead submissions, product usage spikes, or trending topics in real time.",
    sources: ["Tally", "Typeform", "Webhook", "Slack Mentions"],
    icon: webhookIcon
  }
];

const knowledgeLayer = {
    title: "Vector Store (Pinecone)",
    description: "Stores playbooks, pitch decks, policies, and market intel for grounded decisions.",
    icon: ragIcon
  };

const actionBranches = [
  {
    title: "Enrich & Update CRM",
    subtitle: "HubSpot • Salesforce",
    description: "Auto-qualifies leads, enriches firmographics, and updates pipeline stages without human input.",
    initials: "CRM",
    color: "linear-gradient(145deg, #ff7a59, #ffb88c)"
  },
  {
    title: "Social Media Autopilot",
    subtitle: "LinkedIn • X",
    description: "Drafts, approves, and schedules thought-leadership content tuned to live market signals.",
    initials: "SM",
    color: "linear-gradient(145deg, #1d9bf0, #6366f1)"
  },
  {
    title: "Personalized Outreach",
    subtitle: "Gmail • Outreach",
    description: "Delivers hyper-personalized email sequences, routing hot leads straight to sales.",
    initials: "@",
    color: "linear-gradient(145deg, #f97316, #facc15)"
  }
];

const WorkflowDemo = () => {

  return (
    <section id="workflow-demo" className="py-20 relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary/80">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden></span>
              Live Architecture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              From Chaos to Autonomy: <span className="gradient-text">The All-in-One Growth Engine</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I don't just build bots; I build ecosystems. This architecture demonstrates how a single AI agent can simultaneously manage your CRM, generate marketing content, and handle personalized outreach — all powered by your company's unique knowledge base (RAG).
            </p>
          </div>

          <div className="workflow-canvas-wrapper">
            <div className="workflow-canvas growth-engine">
              <div className="workflow-canvas-glow"></div>

              <div className="growth-engine-grid">
                <div className="growth-engine-column growth-engine-column--left">
                  {triggers.map((trigger, index) => (
                    <div key={index} className="growth-engine-node growth-engine-node--trigger">
                      <div className="growth-engine-icon">
                        <img src={trigger.icon} alt="Trigger" />
                      </div>
                      <div>
                        <h3>{trigger.title}</h3>
                        <p>{trigger.description}</p>
                        <div className="growth-engine-chips">
                          {trigger.sources.map((source) => (
                            <span key={source}>{source}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="growth-engine-center">
                  <div className="growth-engine-brain">
                    <div className="growth-engine-brain-glow" aria-hidden></div>
                    <div className="growth-engine-brain-icon">
                      <img src={aiAgentIcon} alt="AI Brain" />
                    </div>
                    <h3>Agentic Decision Core (RAG)</h3>
                    <p>Fetches context, analyzes intent, scores lead quality, and orchestrates downstream actions.</p>
                  </div>

                  <div className="growth-engine-connector" aria-hidden></div>

                  <div className="growth-engine-node growth-engine-node--knowledge">
                    <div className="growth-engine-icon">
                      <img src={knowledgeLayer.icon} alt={knowledgeLayer.title} />
                    </div>
                    <div>
                      <h3>{knowledgeLayer.title}</h3>
                      <p>{knowledgeLayer.description}</p>
                      <div className="growth-engine-chips">
                        <span>Pinecone</span>
                        <span>Docs</span>
                        <span>Playbooks</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="growth-engine-column growth-engine-column--right">
                  {actionBranches.map((branch, index) => (
                    <div key={index} className="growth-engine-branch">
                      <div className="growth-engine-branch-icon" style={{ background: branch.color }}>
                        <span>{branch.initials}</span>
                      </div>
                      <div>
                        <h3>{branch.title}</h3>
                        <p className="branch-subtitle">{branch.subtitle}</p>
                        <p>{branch.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="workflow-powered">
                <span>Powered by </span>
                <span className="gradient-text">n8n</span>
                <span>, </span>
                <span className="gradient-text">AI Agents</span>
                <span> & </span>
                <span className="gradient-text">RAG</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all n8n-node-card">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-semibold mb-2">Revenue Alignment</h4>
              <p className="text-sm text-muted-foreground">
                Connects marketing, sales, and success motions to one shared intelligence layer.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all n8n-node-card">
              <div className="text-3xl mb-3">🧭</div>
              <h4 className="font-semibold mb-2">Context Safety</h4>
              <p className="text-sm text-muted-foreground">
                Every decision is grounded in vectorized knowledge, eliminating hallucinations.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all n8n-node-card">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-semibold mb-2">Autonomous Scale</h4>
              <p className="text-sm text-muted-foreground">
                Handles thousands of micro-decisions daily without adding headcount.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            AI agent icon adapted from{" "}
            <a
              href="https://www.flaticon.com/free-icons/chatbot"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted hover:text-foreground"
            >
              edt.im
            </a>
            {", and RAG icon adapted from "}
            <a
              href="https://www.flaticon.com/free-icons/rag"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted hover:text-foreground"
            >
              JunGSa
            </a>
            {" — both via Flaticon."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;
