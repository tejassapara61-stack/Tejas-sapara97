import { useState } from "react";
import aiAgentIcon from "@/assets/ai-agent-icon.png";

const WorkflowDemo = () => {
  const [activeWorkflow, setActiveWorkflow] = useState("rag");

  const workflows = {
    rag: {
      title: "RAG System",
      nodes: [
        { id: 1, label: "User Query", type: "trigger", color: "from-tech-blue to-tech-cyan" },
        { id: 2, label: "Vector Search", type: "process", color: "from-tech-cyan to-tech-purple" },
        { id: 3, label: "AI Agent", type: "ai", color: "from-tech-purple to-n8n-pink" },
        { id: 4, label: "Response", type: "output", color: "from-n8n-pink to-tech-blue" }
      ]
    },
    whatsapp: {
      title: "WhatsApp Bot",
      nodes: [
        { id: 1, label: "WhatsApp Webhook", type: "trigger", color: "from-green-500 to-green-600" },
        { id: 2, label: "Parse Message", type: "process", color: "from-tech-cyan to-tech-purple" },
        { id: 3, label: "AI Processing", type: "ai", color: "from-tech-purple to-n8n-pink" },
        { id: 4, label: "Send Reply", type: "output", color: "from-n8n-pink to-green-500" }
      ]
    },
    telegram: {
      title: "Telegram Bot",
      nodes: [
        { id: 1, label: "Telegram Trigger", type: "trigger", color: "from-blue-500 to-blue-600" },
        { id: 2, label: "Command Router", type: "process", color: "from-tech-cyan to-tech-purple" },
        { id: 3, label: "AI Agent", type: "ai", color: "from-tech-purple to-n8n-pink" },
        { id: 4, label: "Telegram Reply", type: "output", color: "from-n8n-pink to-blue-500" }
      ]
    },
    saas: {
      title: "SaaS AI Agent",
      nodes: [
        { id: 1, label: "API Request", type: "trigger", color: "from-tech-blue to-tech-cyan" },
        { id: 2, label: "Auth & Validate", type: "process", color: "from-tech-cyan to-tech-purple" },
        { id: 3, label: "Multi-Agent AI", type: "ai", color: "from-tech-purple to-n8n-pink" },
        { id: 4, label: "Database Save", type: "process", color: "from-n8n-pink to-tech-cyan" },
        { id: 5, label: "API Response", type: "output", color: "from-tech-cyan to-tech-blue" }
      ]
    }
  };

  const currentWorkflow = workflows[activeWorkflow as keyof typeof workflows];

  return (
    <section id="workflow-demo" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How My <span className="gradient-text">Workflows</span> Work
            </h2>
            <p className="text-xl text-muted-foreground">
              Interactive automation workflows powered by n8n and AI
            </p>
          </div>

          {/* Workflow Type Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(workflows).map(([key, workflow]) => (
              <button
                key={key}
                onClick={() => setActiveWorkflow(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeWorkflow === key
                    ? "bg-gradient-to-r from-primary to-tech-blue text-primary-foreground shadow-lg scale-105"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {workflow.title}
              </button>
            ))}
          </div>

          {/* Workflow Visualization */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-tech-purple/5 to-tech-cyan/5 rounded-lg blur-3xl"></div>
            
            <div className="relative bg-card border border-border rounded-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
                {currentWorkflow.title}
              </h3>

              {/* Nodes Flow */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
                {currentWorkflow.nodes.map((node, index) => (
                  <div key={node.id} className="flex flex-col md:flex-row items-center gap-4">
                    {/* Node */}
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${node.color} rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                      <div className="relative bg-card border-2 border-border rounded-lg p-6 min-w-[160px] hover:scale-110 transition-all cursor-pointer">
                        <div className="flex flex-col items-center gap-3">
                          {node.type === "ai" ? (
                            <img src={aiAgentIcon} alt="AI Agent" className="w-12 h-12 animate-pulse" />
                          ) : (
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${node.color} flex items-center justify-center text-white font-bold`}>
                              {node.id}
                            </div>
                          )}
                          <span className="font-semibold text-sm text-center">{node.label}</span>
                        </div>
                        
                        {/* Pulse Animation */}
                        <div className="absolute inset-0 rounded-lg animate-pulse">
                          <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${node.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    {index < currentWorkflow.nodes.length - 1 && (
                      <div className="hidden md:block">
                        <svg width="40" height="20" viewBox="0 0 40 20" className="text-primary">
                          <defs>
                            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 10 L 30 10 L 25 5 M 30 10 L 25 15"
                            stroke={`url(#gradient-${index})`}
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                          />
                        </svg>
                      </div>
                    )}
                    
                    {/* Vertical Arrow for mobile */}
                    {index < currentWorkflow.nodes.length - 1 && (
                      <div className="md:hidden">
                        <svg width="20" height="40" viewBox="0 0 20 40" className="text-primary">
                          <path
                            d="M 10 0 L 10 30 L 5 25 M 10 30 L 15 25"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tech Stack Badge */}
              <div className="mt-8 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-semibold">
                  <span>Powered by</span>
                  <span className="gradient-text">n8n</span>
                  <span>+</span>
                  <span className="gradient-text">AI Agents</span>
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Real-time Processing</h4>
              <p className="text-sm text-muted-foreground">
                Instant response with optimized workflow execution
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-semibold mb-2">Auto-scaling</h4>
              <p className="text-sm text-muted-foreground">
                Handle thousands of requests with intelligent load balancing
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">🧠</div>
              <h4 className="font-semibold mb-2">AI-Powered</h4>
              <p className="text-sm text-muted-foreground">
                Context-aware responses using advanced AI agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;
