import { motion } from "framer-motion";
import { Target, Users, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Target, value: "95%", label: "Success Rate" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold text-sm uppercase tracking-widest font-body">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-6 leading-tight">
            Your Partner in Career Success
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-body mb-4">
            At Career Branding, we specialize in helping job seekers, students,
            and professionals craft powerful personal brands.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed font-body">
            From expertly written resumes to ATS-optimized documents, we provide
            the tools and guidance you need to land your dream job, stand out
            from the competition, and build a strong professional profile that
            opens doors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <p className="font-display text-2xl md:text-3xl font-extrabold text-foreground">{value}</p>
              <p className="text-muted-foreground text-xs font-body mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
