import { motion } from "framer-motion";
import { FileText, Linkedin, UserCheck, PenTool, ArrowUpRight } from "lucide-react";

const works = [
  {
    icon: FileText,
    title: "CV/Resume Writing",
    description:
      "ATS-friendly, professionally written CVs and resumes tailored to each client's industry and dream role.",
    tags: ["ATS Optimized", "Executive", "Entry Level"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Revamping",
    description:
      "Complete LinkedIn profile overhauls — headline, about section, experience, and keyword optimization for recruiter visibility.",
    tags: ["Optimization", "Recruiter SEO", "Branding"],
  },
  {
    icon: UserCheck,
    title: "Personal Branding",
    description:
      "Cohesive personal brand identities that position professionals as stand-out candidates and industry voices.",
    tags: ["Brand Strategy", "Positioning"],
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    description:
      "Strategic content plans and ghostwriting that grow professional visibility and authority online.",
    tags: ["Ghostwriting", "Growth"],
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[50%] h-full bg-accent/5 rounded-bl-[160px]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold text-sm uppercase tracking-widest font-body">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mt-3 mb-4 leading-tight">
            Work That Gets Results
          </h2>
          <p className="text-primary-foreground/60 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            A look at the services and deliverables that have helped hundreds of
            professionals land interviews and elevate their careers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {works.map(({ icon: Icon, title, description, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-secondary/60 border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/30 group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                {title}
              </h3>
              <p className="text-primary-foreground/60 font-body text-sm leading-relaxed mb-5">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-body font-medium text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
