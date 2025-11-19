import { useState } from "react";
import aiAgentIcon from "@/assets/ai-agent-icon.png";
import webhookIcon from "@/assets/nodes/webhook.svg";
import httpRequestIcon from "@/assets/nodes/httprequest.svg";
import gmailIcon from "@/assets/nodes/gmail.svg";
import slackIcon from "@/assets/nodes/slack.svg";
import postgresIcon from "@/assets/nodes/postgres.svg";
import codeIcon from "@/assets/nodes/code.svg";
import mergeIcon from "@/assets/nodes/merge.svg";
import googleSheetsIcon from "@/assets/nodes/googleSheets.svg";

const WorkflowDemo = () => {
  const [activeWorkflow, setActiveWorkflow] = useState("rag");

  const workflows = {
    rag: {
      title: "RAG System",
      nodes: [
        { id: 1, label: "Webhook", type: "trigger", icon: webhookIcon },
        { id: 2, label: "HTTP Request", type: "process", icon: httpRequestIcon },
        { id: 3, label: "AI Agent", type: "ai", icon: aiAgentIcon },
        { id: 4, label: "Code", type: "process", icon: codeIcon },
        { id: 5, label: "Postgres", type: "output", icon: postgresIcon }
      ]
    },
    whatsapp: {
      title: "WhatsApp Bot",
      nodes: [
        { id: 1, label: "Webhook", type: "trigger", icon: webhookIcon },
        { id: 2, label: "Code", type: "process", icon: codeIcon },
        { id: 3, label: "AI Agent", type: "ai", icon: aiAgentIcon },
        { id: 4, label: "HTTP Request", type: "process", icon: httpRequestIcon },
        { id: 5, label: "Google Sheets", type: "output", icon: googleSheetsIcon }
      ]
    },
    telegram: {
      title: "Telegram Bot",
      nodes: [
        { id: 1, label: "Webhook", type: "trigger", icon: webhookIcon },
        { id: 2, label: "Merge", type: "process", icon: mergeIcon },
        { id: 3, label: "AI Agent", type: "ai", icon: aiAgentIcon },
        { id: 4, label: "Slack", type: "output", icon: slackIcon }
      ]
    },
    saas: {
      title: "SaaS AI Agent",
      nodes: [
        { id: 1, label: "HTTP Request", type: "trigger", icon: httpRequestIcon },
        { id: 2, label: "Code", type: "process", icon: codeIcon },
        { id: 3, label: "AI Agent", type: "ai", icon: aiAgentIcon },
        { id: 4, label: "Postgres", type: "process", icon: postgresIcon },
        { id: 5, label: "Gmail", type: "output", icon: gmailIcon }
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
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
                {currentWorkflow.nodes.map((node, index) => (
                  <div key={node.id} className="flex flex-col md:flex-row items-center gap-4">
                    {/* Node */}
                    <div className="relative group">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Node card */}
                      <div className="relative bg-card border border-border rounded-xl p-4 min-w-[140px] hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-lg">
                        <div className="flex flex-col items-center gap-2">
                          {/* Icon container with background */}
                          <div className="w-14 h-14 rounded-lg bg-muted/50 flex items-center justify-center p-2">
                            <img 
                              src={node.icon} 
                              alt={node.label} 
                              className={`w-10 h-10 object-contain ${node.type === 'ai' ? 'animate-pulse' : ''}`}
                            />
                          </div>
                          <span className="font-medium text-xs text-center text-foreground">{node.label}</span>
                        </div>
                        
                        {/* Connection dots */}
                        {index < currentWorkflow.nodes.length - 1 && (
                          <>
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                          </>
                        )}
                        {index > 0 && (
                          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                        )}
                      </div>
                    </div>

                    {/* Connection line */}
                    {index < currentWorkflow.nodes.length - 1 && (
                      <div className="hidden md:block">
                        <svg width="32" height="2" viewBox="0 0 32 2" className="text-border">
                          <line 
                            x1="0" 
                            y1="1" 
                            x2="32" 
                            y2="1" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          >
                            <animate 
                              attributeName="stroke-dashoffset" 
                              from="8" 
                              to="0" 
                              dur="0.5s" 
                              repeatCount="indefinite"
                            />
                          </line>
                        </svg>
                      </div>
                    )}
                    
                    {/* Vertical connection for mobile */}
                    {index < currentWorkflow.nodes.length - 1 && (
                      <div className="md:hidden">
                        <svg width="2" height="32" viewBox="0 0 2 32" className="text-border">
                          <line 
                            x1="1" 
                            y1="0" 
                            x2="1" 
                            y2="32" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          >
                            <animate 
                              attributeName="stroke-dashoffset" 
                              from="8" 
                              to="0" 
                              dur="0.5s" 
                              repeatCount="indefinite"
                            />
                          </line>
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
