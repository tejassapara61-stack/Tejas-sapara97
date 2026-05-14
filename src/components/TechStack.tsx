import ragIcon from "@/assets/nodes/rag.svg";

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
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
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
      logo: "https://n8n.io/favicon.ico",
      techs: [
        { name: "n8n", logo: "https://n8n.io/favicon.ico" },
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

  const coreSkills = [
    { name: "Python (Data Science)", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "AI Agents", logo: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" },
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "n8n", logo: "https://n8n.io/favicon.ico" },
    { name: "RAG Systems", logo: ragIcon },
    { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    { name: "Supabase", logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
    { name: "Automation", logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
    { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    { name: "Canva", logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" }
  ];

  return (
    <section id="tech-stack" className="py-20 relative scroll-mt-28">
      <div className="tech-stack-container n8n-node-card px-4">
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
                className="p-6 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg group n8n-node-card dark:bg-card dark:text-foreground dark:border-border"
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
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-700 transition-colors group/tech hover:border-primary/40 hover:bg-primary/10 hover:text-primary dark:border-border dark:bg-muted dark:text-muted-foreground dark:hover:bg-primary dark:hover:text-primary-foreground"
                    >
                      <img src={tech.logo} alt={tech.name} className="w-4 h-4 group-hover/tech:scale-110 transition-transform" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Expertise - n8n style marquee */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 relative overflow-hidden n8n-node-card">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 animate-pulse"></div>
            <h3 className="text-2xl font-bold text-center relative z-10">
              💪 Core <span className="gradient-text">Expertise</span>
            </h3>
            <p className="text-center text-sm md:text-base text-muted-foreground mt-2 relative z-10">
              Inspired by the n8n workflow canvas — hover to pause and explore each capability.
            </p>
            <div className="core-expertise-marquee relative z-10 mt-8">
              <div className="core-expertise-track">
                {[...coreSkills, ...coreSkills].map((skill, index) => (
                  <div
                    key={`core-skill-${index}`}
                    className="core-expertise-item n8n-node-card"
                    aria-hidden={index >= coreSkills.length}
                  >
                    <div className="core-expertise-icon">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
