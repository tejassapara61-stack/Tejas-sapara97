import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Workflow, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI agents, RAG systems, and intelligent automation solutions",
      features: [
        "Custom AI agent development",
        "RAG system implementation",
        "Machine learning model integration",
        "Intelligent automation pipelines",
        "Natural language processing"
      ]
    },
    {
      icon: Workflow,
      title: "n8n Automation",
      description: "Complex workflow automation, API integrations, and process optimization",
      features: [
        "Workflow design & optimization",
        "API integration & orchestration",
        "Process automation",
        "Custom node development",
        "Enterprise automation solutions"
      ]
    },
    {
      icon: Code,
      title: "SaaS Development",
      description: "Full-stack web applications with modern frameworks and cloud services",
      features: [
        "React-based web applications",
        "Firebase/Supabase backend",
        "RESTful API development",
        "Database design & optimization",
        "Cloud deployment & scaling"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for your automation and development needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-primary/50 transition-all card-glow"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What I Bring */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-card to-card/50 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              💼 What I <span className="gradient-text">Bring</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Result-Oriented</h4>
                <p className="text-sm text-muted-foreground">Focused on delivering measurable outcomes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Fast Delivery</h4>
                <p className="text-sm text-muted-foreground">Quick turnaround without compromising quality</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔧</div>
                <h4 className="font-semibold mb-2">Scalable Solutions</h4>
                <p className="text-sm text-muted-foreground">Built to grow with your needs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-semibold mb-2">Collaborative</h4>
                <p className="text-sm text-muted-foreground">Open communication throughout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
