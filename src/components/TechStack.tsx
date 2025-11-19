const TechStack = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      techs: [
        { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" }
      ]
    },
    {
      title: "Frontend Development",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      techs: [
        { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" }
      ]
    },
    {
      title: "AI & Machine Learning",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
      techs: [
        { name: "TensorFlow", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
        { name: "OpenAI", logo: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" },
        { name: "LangChain", logo: "https://cdn.worldvectorlogo.com/logos/langchain.svg" }
      ]
    },
    {
      title: "Automation & Workflows",
      logo: "https://avatars.githubusercontent.com/u/31465727?s=200&v=4",
      techs: [
        { name: "n8n", logo: "https://avatars.githubusercontent.com/u/31465727?s=200&v=4" },
        { name: "Zapier", logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" }
      ]
    },
    {
      title: "Backend & Databases",
      logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      techs: [
        { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
        { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "Supabase", logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
        { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" }
      ]
    },
    {
      title: "Cloud & DevOps",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      techs: [
        { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
        { name: "GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
        { name: "GCP", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" }
      ]
    },
    {
      title: "APIs & Integration",
      logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      techs: [
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "FastAPI", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" }
      ]
    },
    {
      title: "Design Tools",
      logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      techs: [
        { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
        { name: "Canva", logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" }
      ]
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
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  <img src={category.logo} alt={category.title} className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-semibold mb-4 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors group/tech"
                    >
                      <img src={tech.logo} alt={tech.name} className="w-4 h-4 group-hover/tech:scale-110 transition-transform" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Skills - 3D */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 animate-pulse"></div>
            <h3 className="text-2xl font-bold mb-6 text-center relative z-10">
              💪 Core <span className="gradient-text">Expertise</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {[
                { name: "Python (Data Science)", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
                { name: "AI Agents", logo: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" },
                { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
                { name: "n8n", logo: "https://avatars.githubusercontent.com/u/31465727?s=200&v=4" },
                { name: "RAG Systems", logo: "https://cdn.worldvectorlogo.com/logos/langchain.svg" },
                { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
                { name: "Supabase", logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
                { name: "Automation", logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
                { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
                { name: "Canva", logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="group px-6 py-3 rounded-lg bg-card border border-primary/50 font-semibold hover:scale-110 transition-all cursor-default relative"
                  style={{
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(20px)';
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <img src={skill.logo} alt={skill.name} className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    <span>{skill.name}</span>
                  </div>
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
