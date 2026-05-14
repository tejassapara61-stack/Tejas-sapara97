import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Mahi 1.0",
      description: "Desktop AI Orchestrator",
      challenge: "Manual desktop task management drains operator time and introduces human error across workflows.",
      solution: "A desktop assistant that uses multi-agent orchestration to automate file handling, data retrieval, and system operations autonomously.",
      outcomes: [
        "Coordinates multiple AI agents to execute and monitor desktop workflows without manual intervention.",
        "Employs RAG pipelines to retrieve project-specific knowledge before every decision point.",
        "Maintains audit-ready activity logs for governance, compliance, and troubleshooting."
      ],
      tags: ["Python", "RAG", "OpenAI API", "Multi-Agent Systems", "n8n"],
      github: "https://github.com/tejassapara61-stack/mahi-1.0",
      status: "Active",
      stars: "12",
      forks: "4"
    },
    {
      title: "Green-GO",
      description: "Sustainable Tech Tracker",
      challenge: "Sustainability teams lacked a live view of environmental metrics across initiatives.",
      solution: "A responsive web app that visualizes ecological data, pairing secure authentication with real-time updates for eco-friendly practices.",
      outcomes: [
        "Streams impact metrics into dashboards that highlight trends and anomalies instantly.",
        "Implements role-based access controls so distributed teams collaborate safely.",
        "Integrates REST APIs to synchronize sustainability data across internal systems."
      ],
      tags: ["React", "Node.js", "Firebase", "REST APIs"],
      github: "https://github.com/tejassapara61-stack/green-GO",
      status: "Active",
      stars: "8",
      forks: "2"
    }
  ];

  return (
    <section id="projects" className="py-20 relative scroll-mt-28">
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                        The Solution
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {project.outcomes && project.outcomes.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                        Key Outcomes
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.outcomes.map((outcome, outcomeIndex) => (
                          <div
                            key={outcomeIndex}
                            className="rounded-lg bg-card border border-border px-4 py-3 text-sm text-muted-foreground"
                          >
                            {outcome}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
