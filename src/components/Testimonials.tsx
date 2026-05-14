const testimonials = [
  {
    quote: "Tejas builds automation workflows faster than anyone I know.",
    name: "Priya Shah",
    title: "Peer Developer, GenAI Hackathon"
  },
  {
    quote: "He connects disparate tools into one cohesive system without losing sight of business outcomes.",
    name: "MR. Belim Irfan",
    title: "Professor of Computer Science"
  },
  {
    quote: "Every project ends with clean documentation, crisp hand-off, and measurable lift in KPIs.",
    name: "Veena Solanki",
    title: "Product Marketing Lead"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary/80">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            "What People Say"
          </h2>
          <p className="text-muted-foreground text-lg">
            Early collaborators, professors, and peers share how Tejas shows up when stakes are high.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative h-full rounded-xl border border-border bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="text-4xl leading-none text-primary" aria-hidden>
                “
              </span>
              <blockquote className="mt-4 text-base text-foreground">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p>{testimonial.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
