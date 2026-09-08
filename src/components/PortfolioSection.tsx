import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import work1 from "@/assets/image-4.png.asset.json";
import work2 from "@/assets/image-5.png.asset.json";
import work3 from "@/assets/image-6.png.asset.json";
import work4 from "@/assets/image-7.png.asset.json";
import work5 from "@/assets/image-8.png.asset.json";

const works = [
  {
    image: work1.url,
    title: "Technology Executive Portfolio",
    category: "Executive Branding",
    description:
      "A dark, editorial one-page portfolio for a global technology executive — resume downloads, credentials, and achievements.",
  },
  {
    image: work2.url,
    title: "Consultant Executive Portfolio",
    category: "Personal Branding",
    description:
      "A polished executive portfolio for a franchise and healthcare consultant with case studies and a strong professional headshot.",
  },
  {
    image: work3.url,
    title: "Sales Leadership Portfolio",
    category: "Career Portfolio",
    description:
      "A constellation-themed leadership portfolio highlighting career milestones, skills, and a downloadable CV.",
  },
  {
    image: work4.url,
    title: "General Manager Profile",
    category: "Professional Profile",
    description:
      "A clean navy-and-blue profile site for a general manager, centered on experience and a professional biography.",
  },
  {
    image: work5.url,
    title: "Mortgage Executive Portfolio",
    category: "Executive Branding",
    description:
      "A bold editorial portfolio for a mortgage executive and author, with credentials and a book-a-call feature.",
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
            Career Portfolio Websites We've Built
          </h2>
          <p className="text-primary-foreground/60 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Real portfolio websites crafted for executives, consultants, and
            professionals — each one designed to elevate a personal brand and
            open doors.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map(({ image, title, category, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`group bg-secondary/60 border border-primary-foreground/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors ${
                i < 2 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[11px] font-body font-semibold uppercase tracking-wider text-accent-foreground bg-accent px-3 py-1 rounded-full">
                  {category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg font-bold text-primary-foreground">
                    {title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-primary-foreground/30 group-hover:text-accent transition-colors" />
                </div>
                <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
