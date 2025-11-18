import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

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

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      handle: "@tejassapara61-stack",
      link: "https://github.com/tejassapara61-stack",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "Tejas Sapara",
      link: "https://www.linkedin.com/in/tejass-shapra-48507b23a",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@tej__.09",
      link: "https://www.instagram.com/tej__.09",
      color: "hover:text-pink-500"
    }
  ];

  const openFor = [
    "Freelance projects",
    "Collaboration opportunities",
    "Technical consulting",
    "Speaking engagements"
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can work together
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="border-border mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-center">
                Connect on Social Media
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all card-glow group"
                  >
                    <social.icon className={`h-8 w-8 transition-colors ${social.color}`} />
                    <div className="text-center">
                      <p className="font-semibold mb-1">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Open For */}
          <div className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              🤝 Open <span className="gradient-text">For</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {openFor.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card"
                >
                  <span className="text-primary">✓</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href="mailto:tejassapara61@gmail.com">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Me an Email
                </Button>
              </a>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold gradient-text italic">
              "Automating the future, one workflow at a time"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
