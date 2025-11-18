const TechStack = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: "🐍",
      techs: ["Python", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Frontend Development",
      icon: "⚛️",
      techs: ["React", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"]
    },
    {
      title: "Automation & Workflows",
      icon: "⚙️",
      techs: ["n8n", "Zapier"]
    },
    {
      title: "Backend & Databases",
      icon: "🗄️",
      techs: ["Node.js", "Express", "Firebase", "Supabase", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      techs: ["Docker", "Git", "GitHub", "GCP", "AWS"]
    },
    {
      title: "APIs & Integration",
      icon: "🔌",
      techs: ["Postman", "FastAPI", "GraphQL", "RESTful"]
    },
    {
      title: "Design Tools",
      icon: "🎨",
      techs: ["Figma", "Canva"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies I work with to build amazing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all card-glow group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Skills */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              💪 Core <span className="gradient-text">Expertise</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "AI Agents", "React", "n8n", "RAG Systems", "Firebase", "Supabase", "Automation", "TensorFlow", "LangChain"].map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-lg bg-card border border-primary/50 font-semibold hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
