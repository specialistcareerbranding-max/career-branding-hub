import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Professionally Tailored", desc: "Every document is custom-crafted to reflect your unique career story and goals." },
  { title: "ATS-Friendly Formats", desc: "Documents optimized to pass automated screening systems with ease." },
  { title: "Personalized Support", desc: "One-on-one consultations to ensure your materials perfectly represent you." },
  { title: "Results-Driven", desc: "More interviews, better offers, and accelerated career growth." },
];

const WhyChooseUsSection = () => (
  <section id="why-us" className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold text-sm uppercase tracking-widest font-body">Why Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-3">
            Why Choose Career Branding
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-4 bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-base font-bold text-foreground mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
