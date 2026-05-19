import { useEffect, useState, type FormEvent } from "react";
import { Calendar, Github, Linkedin, Mail, MapPin, Twitter, Phone } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tejass-shapra-48507b23a",
    hover: "hover:bg-blue-500 hover:text-text-main"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/tejassapara61-stack",
    hover: "hover:bg-card hover:text-text-main"
  },
  {
    icon: Twitter,
    label: "Twitter/X",
    href: "https://twitter.com/tejasSapara09",
    hover: "hover:bg-blue-400 hover:text-text-main"
  }
];

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50 px-6 py-20 text-slate-900 transition-colors duration-300 dark:bg-card dark:text-text-main">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Let&apos;s <span className="text-blue-600 dark:text-blue-400">Automate</span> Your Future
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Ready to save hours of manual work? Whether you need a custom AI agent or a full SaaS build, let&apos;s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-borderline dark:bg-card">
              <h3 className="mb-6 text-2xl font-semibold">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-text-main">Email</p>
                    <a
                      href="mailto:tejassapara61@gmail.com"
                      className="text-slate-600 transition hover:text-blue-500 dark:text-slate-400"
                    >
                      tejassapara61@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-text-main">Phone</p>
                    <a
                      href="tel:+9170166611246"
                      className="text-slate-600 transition hover:text-blue-500 dark:text-slate-400"
                    >
                      +91 70166611246
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-text-main">Location</p>
                    <p className="text-slate-600 dark:text-slate-400">Gujarat, India (Available Remote)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8 dark:border-borderline">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Connect on Socials
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-full bg-gray-100 p-3 text-slate-700 transition-all dark:bg-card dark:text-slate-200 ${link.hover}`}
                    >
                      <link.icon className="h-5 w-5" aria-hidden />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-text-main shadow-xl">
              <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">
                <Calendar className="h-6 w-6" />
                Skip the inbox?
              </h3>
              <p className="mb-6 text-blue-100">
                Jump straight into WhatsApp and lock in a 15-minute discovery call — we&apos;ll map opportunities and next steps.
              </p>
              <a
                href="https://wa.me/917016611246?text=Hey%20Tejass%2C%20I%27d%20like%20to%20book%20a%20strategy%20call."
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-lg bg-white py-3 text-center font-bold text-blue-600 shadow-md transition hover:bg-blue-50"
              >
                Book via WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-borderline dark:bg-card">
              <h3 className="text-xl font-semibold">What to expect</h3>
              <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                <li>• A 24-hour response time on all inquiries.</li>
                <li>• Quick discovery call to scope automation or AI opportunities.</li>
                <li>• A written action plan with implementation paths.</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

type SubmissionState = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "2e31ec39-5775-4b19-832d-d3e7863d9e0f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to send message. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-borderline dark:bg-card"
      onSubmit={handleSubmit}
    >
      <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. tejas"
              className="w-full rounded-lg border border-slate-200 bg-gray-50 p-3 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-borderline dark:bg-card"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="corenextaa@company.com"
              className="w-full rounded-lg border border-slate-200 bg-gray-50 p-3 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-borderline dark:bg-card"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="project-type">
            Project Type
          </label>
          <select
            id="project-type"
            name="projectType"
            className="w-full rounded-lg border p-3 outline-none transition focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#111] text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select an option...
            </option>
            <option value="ai-agent">AI Agent Development</option>
            <option value="n8n-workflow">n8n Workflow Automation</option>
            <option value="saas-build">SaaS Product Build</option>
            <option value="consulting">Technical Consulting</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">
            Tell me about the project
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="I want to automate my customer support..."
            className="w-full rounded-lg border border-slate-200 bg-gray-50 p-3 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-borderline dark:bg-card"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-4 font-bold text-text-main shadow-lg shadow-blue-500/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        <div aria-live="polite" className="min-h-[1.5rem] text-sm">
          {status === "success" && (
            <p className="text-green-600 dark:text-green-400">Message sent successfully! I&apos;ll respond within 24 hours.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 dark:text-red-400">{errorMessage ?? "Unable to send message. Please try again later."}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactPage;
