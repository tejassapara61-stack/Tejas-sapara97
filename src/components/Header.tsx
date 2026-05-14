import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import type { MouseEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Workflow", href: "#workflow-demo" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

const Header = () => {
  const [activeHash, setActiveHash] = useState<string>("#hero");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const currentHash = window.location.hash;
    if (currentHash) {
      setActiveHash(currentHash);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sections = NAV_LINKS.map((link) => document.querySelector<HTMLElement>(link.href)).filter(
      (section): section is HTMLElement => Boolean(section)
    );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          const topMost = visibleEntries.reduce((prev, current) =>
            prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
          );
          setActiveHash(`#${topMost.target.id}`);
          return;
        }

        const nearest = entries.reduce((prev, current) =>
          prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
        );
        setActiveHash(`#${nearest.target.id}`);
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = useCallback((event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (typeof window === "undefined") {
      return;
    }

    event.preventDefault();
    const target = document.querySelector<HTMLElement>(hash);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveHash(hash);

      window.history.replaceState(null, "", hash);
    }
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <a href="#hero" className="font-semibold text-sm md:text-base tracking-tight text-foreground">
            Tejas Sapara • AI Automation
          </a>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary/10 md:inline-flex"
            >
              Book a Consult
            </Link>
            <ThemeToggle floating={false} className="shrink-0" />
          </div>
        </div>
        <nav aria-label="Primary navigation" className="pb-3">
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => handleLinkClick(event, item.href)}
                  className={cn(
                    "rounded-full border border-transparent px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus:outline-none focus-visible:border-primary focus-visible:text-foreground",
                    activeHash === item.href && "border-primary/40 bg-primary/10 text-foreground"
                  )}
                  aria-current={activeHash === item.href ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
