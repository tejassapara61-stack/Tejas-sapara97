import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Mahi 1.0",
      description: "Advanced AI-powered automation system featuring intelligent workflows and multi-agent orchestration",
      longDescription: "A comprehensive automation platform that leverages AI agents for intelligent decision-making and workflow optimization.",
      tags: ["Python", "AI Agents", "n8n", "RAG", "OpenAI", "Firebase"],
      features: [
        "🤖 Multi-agent AI orchestration",
        "🔄 Automated workflow optimization",
        "📊 Real-time analytics dashboard",
        "🔌 Seamless API integrations",
        "🧠 Context-aware decision making"
      ],
      github: "https://github.com/tejassapara61-stack/mahi-1.0",
      status: "Active",
      stars: "12",
      forks: "4"
    },
    {
      title: "Green-GO",
      description: "Sustainable tech solution combining modern web technologies with eco-friendly practices",
      longDescription: "An innovative platform focused on environmental impact tracking and sustainable technology practices.",
      tags: ["React", "Node.js", "Firebase", "Python", "REST API"],
      features: [
        "🌿 Environmental impact tracking",
        "📱 Responsive web application",
        "🔐 Secure authentication system",
        "📈 Data visualization",
        "⚡ Real-time updates"
      ],
      github: "https://github.com/tejassapara61-stack/green-GO",
      status: "Active",
      stars: "8",
      forks: "2"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing my best work in AI automation and development
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all card-glow overflow-hidden">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="h-4 w-4" />
                          View Code
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4 text-primary" />
                      {project.forks}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {project.longDescription}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                      Key Features
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/tejassapara61-stack" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <ExternalLink className="h-5 w-5" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
