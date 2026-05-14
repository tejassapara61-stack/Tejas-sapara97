import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, CalendarCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: Mail, label: "Email", value: "tejassapara61@gmail.com", link: "mailto:tejassapara61@gmail.com" },
  { icon: MapPin, label: "Location", value: "Gujarat, India", link: null },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/tejass-shapra-48507b23a", description: "Connect on LinkedIn — let's align asynchronously." },
  { icon: Github, label: "GitHub", link: "https://github.com/tejassapara61-stack", description: "Browse my automation repos and AI experiments." },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative scroll-mt-28 bg-gray-50 dark:bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px"
        style={{ background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-accent) 30%, transparent), transparent)' }}
      />

      <motion.div className="max-w-6xl mx-auto px-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
        <div className="liquid-glass-prominent rounded-2xl p-8 md:p-12">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="liquid-glass-pill gap-2 px-4 py-1.5 text-accent text-xs font-mono tracking-widest uppercase">
                  Let's Build Together
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                  From Discovery to Deployment — in one{" "}
                  <span className="gradient-text drop-shadow-lg">consultative flow.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Share your current stack, friction points, and goals — I'll architect the roadmap and build it.
                </p>
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Pre-call intake captures stack, KPIs, and blockers.</li>
                <li>• Strategy deck outlines AI agents, automations, and ROI.</li>
                <li>• Engagement options: retainers, build-operate-transfer, or co-build.</li>
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild
                  className="relative overflow-hidden text-gray-900 dark:text-white bg-gray-100 dark:bg-white/[0.12] border border-gray-200 dark:border-white/[0.18] backdrop-blur-lg shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-gray-200 dark:hover:bg-white/[0.18]"
                >
                  <Link to="/contact">
                    Launch Consultation
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CalendarCheck className="h-4 w-4 text-accent" />
                  24-hour response SLA
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Direct Channels */}
              <div className="liquid-glass rounded-xl p-5">
                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest">Direct Channels</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="rounded-lg p-2 bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08]">
                        <info.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-sm text-gray-600 dark:text-gray-400 transition hover:text-accent">{info.value}</a>
                        ) : (
                          <p className="text-sm text-gray-600 dark:text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="liquid-glass rounded-xl p-5">
                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest">Connect</h3>
                <div className="space-y-3">
                  {socials.map((social) => (
                    <a key={social.label} href={social.link} target="_blank" rel="noreferrer"
                      className="group flex items-start gap-3 rounded-lg p-3 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.08] hover:border-gray-300 dark:hover:border-white/[0.15] transition-all duration-300"
                    >
                      <social.icon className="mt-0.5 h-4 w-4 text-gray-500 dark:text-gray-500 group-hover:text-accent transition-colors" aria-hidden />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">{social.label}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
