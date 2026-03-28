import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "Career Branding completely transformed my resume. Within two weeks of using their optimized documents, I landed three interviews and received an offer at my dream company!",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    text: "The ATS optimization service was a game-changer. I was applying for months with no responses, but after working with Career Branding, my callback rate increased dramatically.",
  },
  {
    name: "Amara Osei",
    role: "Graduate Student",
    text: "Their Statement of Purpose writing helped me get accepted into my top-choice Master's program. The quality and attention to detail were exceptional.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest font-body">Testimonials</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          What Our <span className="text-navy">Clients Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background border border-border rounded-xl p-6 relative"
          >
            <Quote className="w-8 h-8 text-accent/30 absolute top-4 right-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed mb-5">"{t.text}"</p>
            <div>
              <p className="font-display font-bold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-xs font-body">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
