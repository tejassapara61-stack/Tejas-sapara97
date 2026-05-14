import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, CalendarCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tejassapara61@gmail.com",
      link: "mailto:tejassapara61@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Keshod, Gujarat, India",
      link: null
    }
  ];

  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/tejass-shapra-48507b23a",
      description: "Signal your interest on LinkedIn and let&apos;s align asynchronously.",
      accent: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/tejassapara61-stack",
      description: "Browse recent automation repos and technical experiments.",
      accent: "text-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 relative scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white/80 px-8 py-16 shadow-xl backdrop-blur dark:border-border dark:bg-card/90">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-1 text-xs uppercase tracking-[0.35em] text-primary/80">
                  Consultation Interface
                </span>
                <h2 className="text-4xl font-bold md:text-5xl">
                  From Discovery to Deployment — in one consultative flow.
                </h2>
                <p className="text-lg text-muted-foreground">
                  High-impact automations start with clarity. Share your current stack, friction points, and outcomes — I&apos;ll architect the roadmap and build it.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Pre-call intake captures stack, KPIs, and blockers.</li>
                <li>• Strategy deck outlines AI agents, automations, and ROI moments.</li>
                <li>• Engagement options across retainers, build-operate-transfer, or co-building.</li>
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild className="relative overflow-hidden bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <Link to="/contact">
                    Launch Consultation Interface
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarCheck className="h-4 w-4 text-primary" />
                  24-hour response SLA
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-border dark:bg-card">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Direct Channels</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sm text-muted-foreground transition hover:text-primary"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-border dark:bg-card">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Social proof in motion</h3>
                <div className="space-y-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 p-4 transition hover:border-primary/40 hover:bg-primary/5"
                    >
                      <social.icon className={`mt-1 h-5 w-5 ${social.accent}`} aria-hidden />
                      <div>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
