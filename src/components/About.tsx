import { Code2, Zap, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "AI Agent Development",
      description: "Building intelligent automation systems with cutting-edge AI"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Optimizing complex processes with n8n and custom solutions"
    },
    {
      icon: Users,
      title: "Open Collaboration",
      description: "Active contributor to AI and automation communities"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering scalable, production-ready solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforming complex workflows into seamless automated solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am an AI Automation Developer and BCA student based in Gujarat, India. Unlike traditional developers who just write code, I focus on building <span className="text-foreground font-semibold">systems</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise lies in bridging the gap between raw data and actionable intelligence. Whether it's orchestrating multi-agent workflows in n8n, building RAG pipelines for smarter answers, or developing full-stack SaaS applications, I engineer solutions that work autonomously.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">🤖</div>
                  <div>
                    <p className="font-semibold">Currently working on</p>
                    <p className="text-muted-foreground">AI Agent automation systems</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-secondary">📚</div>
                  <div>
                    <p className="font-semibold">Learning</p>
                    <p className="text-muted-foreground">AI Agents, Firebase & Supabase, RAG (Retrieval-Augmented Generation)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-accent">🤝</div>
                  <div>
                    <p className="font-semibold">Open to collaborate on</p>
                    <p className="text-muted-foreground">AI Agents, n8n workflows, and SaaS projects</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">⚡</div>
                  <div>
                    <p className="font-semibold">Fun fact</p>
                    <p className="text-muted-foreground">I analyze everything before building it – from user behavior to system architecture!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-card dark:text-foreground dark:border-border"
                >
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="p-8 rounded-lg bg-gradient-to-br from-card to-card/50 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              🎯 Current <span className="gradient-text">Focus</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Learning</p>
                <p className="font-semibold">AI Agents, Firebase, Supabase, RAG</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Working On</p>
                <p className="font-semibold">Automation Systems, AI Development</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Collaborating</p>
                <p className="font-semibold">AI Agents, n8n, SaaS Solutions</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Expertise</p>
                <p className="font-semibold">Python, AI, React, Automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
