import { motion } from "framer-motion";
import { Target, Users, Award } from "lucide-react";

const highlights = [
  { icon: Target, label: "Targeted Approach" },
  { icon: Users, label: "500+ Clients Served" },
  { icon: Award, label: "Industry Expertise" },
];

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest font-body">About Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
          Your Partner in <span className="text-navy">Career Success</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
          At Career Branding, we specialize in helping job seekers, students, and professionals craft powerful personal brands. 
          From expertly written resumes to ATS-optimized documents, we provide the tools and guidance you need to land your dream job, 
          stand out from the competition, and build a strong professional profile that opens doors.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 shadow-sm border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-body font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
