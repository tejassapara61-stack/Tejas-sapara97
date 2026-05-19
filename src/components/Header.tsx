import { cn } from "@/lib/utils";
import type { MouseEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Automations", href: "#automations" },
  { label: "Services", href: "#services" },
  { label: "Playbook", href: "#playbook" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [activeHash, setActiveHash] = useState<string>("#hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash) setActiveHash(currentHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = NAV_LINKS.map(link => document.querySelector<HTMLElement>(link.href)).filter(Boolean) as HTMLElement[];
      let currentSection = "";
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSection = `#${section.id}`;
        }
      });
      
      if (currentSection) {
        setActiveHash(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScrollSpy);
    // Trigger once on mount
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleLinkClick = useCallback((event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault();
    const target = document.querySelector<HTMLElement>(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveHash(hash);
      window.history.replaceState(null, "", hash);
    }
  }, []);

  return (
    <header className={cn("sticky top-0 z-40 transition-all duration-500 border-b-[1px] border-[var(--color-accent)]/20", scrolled ? "py-2" : "py-3")}>
      <div className={cn(
        "max-w-6xl mx-4 md:mx-auto rounded-2xl transition-all duration-500",
        scrolled
          ? "px-5 py-2.5 bg-white/80 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.12] shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "px-6 py-3 bg-white/40 dark:bg-white/[0.02] border border-transparent backdrop-blur-md"
      )}>
        <div className="flex items-center justify-between gap-4">
          {/* Branding */}
          <a href="#hero" className="font-bold text-sm md:text-base tracking-tight text-gray-900 dark:text-white hover:text-[var(--color-accent)] transition-colors">
            Tejass Sapara<span className="text-gray-500 dark:text-gray-400 font-normal"> • AI Architect</span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Nav links — desktop only */}
            <nav aria-label="Primary navigation" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(event) => handleLinkClick(event, item.href)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border",
                        activeHash === item.href
                          ? "text-[var(--color-accent)] bg-[var(--color-accent)]/10 border-[var(--color-accent)]/20 shadow-sm"
                          : "text-gray-600 dark:text-gray-400 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 border-transparent"
                      )}
                      aria-current={activeHash === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA — glass prominent button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-white/[0.10] border border-gray-200 dark:border-white/[0.18] shadow-sm dark:shadow-[0_4px_16px_rgba(0,0,0,0.2)] backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-gray-200 dark:hover:bg-white/[0.15]"
            >
              Book a Consult
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
