import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import AutomationGallery from "@/components/AutomationGallery";
import AiLab from "@/components/AiLab";
import Services from "@/components/Services";
import ClaudeSkills from "@/components/ClaudeSkills";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-purple-600 focus:px-4 focus:py-2 focus:text-text-main focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero3D />
        <About />
        <TechStack />
        <Projects />
        <AutomationGallery />
        <AiLab />
        <Services />
        <ClaudeSkills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 relative bg-white dark:bg-white/[0.03] border-t border-gray-200 dark:border-white/[0.06] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-1">
              © 2026 Tejass Sapara. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-600 text-xs">
              Built with React, Tailwind CSS, and AI-assisted development ⚡
            </p>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
