import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Professionally Tailored Documents", desc: "Every document is custom-crafted to reflect your unique career story and goals." },
  { title: "ATS-Friendly Formats", desc: "Our documents are optimized to pass through automated screening systems with ease." },
  { title: "Personalized Support", desc: "One-on-one consultations ensure your materials perfectly represent who you are." },
  { title: "Results-Driven Approach", desc: "We focus on outcomes — more interviews, better offers, and accelerated career growth." },
];

const WhyChooseUsSection = () => (
  <section id="why-us" className="py-20 lg:py-28" style={{ background: "var(--hero-gradient)" }}>
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest font-body">Why Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
          Why Choose <span className="text-accent">Career Branding</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-1">{r.title}</h3>
              <p className="text-primary-foreground/60 text-sm font-body leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
