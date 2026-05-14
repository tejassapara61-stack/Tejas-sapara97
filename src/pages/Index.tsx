import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import WorkflowDemo from "@/components/WorkflowDemo";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <TechStack />
        <WorkflowDemo />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              © 2025 Tejas Sapara. All rights reserved.
            </p>
            <p className="text-sm">
              Built with React, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
