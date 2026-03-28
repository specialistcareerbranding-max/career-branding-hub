import { motion } from "framer-motion";
import {
  FileText, Search, Shield, GraduationCap, Mail, HeartHandshake, Globe,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Resume Writing",
    desc: "Professionally crafted resumes that highlight your strengths and make a lasting impression on hiring managers.",
  },
  {
    icon: Search,
    title: "Resume Optimization & Alignment",
    desc: "Tailored resume adjustments to perfectly align with specific job descriptions and industry requirements.",
  },
  {
    icon: Shield,
    title: "ATS Document Optimization",
    desc: "Ensure your resume passes Applicant Tracking Systems with properly formatted, keyword-optimized documents.",
  },
  {
    icon: GraduationCap,
    title: "Statement of Purpose (SOP)",
    desc: "Compelling SOPs that showcase your academic goals, motivation, and unique qualifications for admissions.",
  },
  {
    icon: Mail,
    title: "Letters of Intent",
    desc: "Persuasive letters that communicate your interest and value proposition to potential employers or institutions.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Career Support",
    desc: "Ongoing guidance including interview prep, LinkedIn optimization, and career strategy planning.",
  },
  {
    icon: Globe,
    title: "Career Portfolio Website",
    desc: "Custom-built professional portfolio websites that showcase your work, skills, and personal brand online.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest font-body">What We Offer</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Our <span className="text-navy">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-background border border-border rounded-xl p-6 hover:shadow-xl hover:border-accent/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
              <s.icon className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
