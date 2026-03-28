import { motion } from "framer-motion";
import {
  FileText, Search, Shield, GraduationCap, Mail, HeartHandshake, Globe, Linkedin, UserCheck, PenTool,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "CV/Resume Writing",
    desc: "Professionally crafted resumes that highlight your strengths and make a lasting impression.",
  },
  {
    icon: Search,
    title: "CV/Resume Optimization",
    desc: "Tailored adjustments to align with specific job descriptions and industry requirements.",
  },
  {
    icon: Shield,
    title: "ATS Optimization",
    desc: "Properly formatted, keyword-optimized documents that pass Applicant Tracking Systems.",
  },
  {
    icon: GraduationCap,
    title: "Statement of Purpose",
    desc: "Compelling SOPs that showcase your goals, motivation, and qualifications for admissions.",
  },
  {
    icon: Mail,
    title: "Letters of Intent",
    desc: "Persuasive letters that communicate your interest and value to employers or institutions.",
  },
  {
    icon: HeartHandshake,
    title: "Career Support",
    desc: "Ongoing guidance including interview prep, LinkedIn optimization, and career strategy.",
  },
  {
    icon: Globe,
    title: "Portfolio Website",
    desc: "Custom professional portfolio websites that showcase your work and personal brand.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Revamping & Optimization",
    desc: "Transform your LinkedIn profile into a powerful tool that attracts recruiters and opportunities.",
  },
  {
    icon: UserCheck,
    title: "Personal Branding",
    desc: "Build a compelling personal brand that sets you apart and communicates your unique value.",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    desc: "Strategic content planning to establish thought leadership and grow your professional presence.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-32 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <span className="text-accent font-bold text-sm uppercase tracking-widest font-body">What We Offer</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-4">
          Our Services
        </h2>
        <p className="text-muted-foreground font-body">
          Comprehensive career branding solutions to help you stand out and succeed.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group bg-background border border-border rounded-2xl p-7 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
              <s.icon className="w-5 h-5 text-primary-foreground transition-colors duration-300" />
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
