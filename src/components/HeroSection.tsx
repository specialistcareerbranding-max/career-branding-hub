import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const HeroSection = () => (
  <section className="relative min-h-[100vh] flex items-center bg-primary overflow-hidden">
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-80" />
    <div className="absolute top-0 right-0 w-[60%] h-full bg-accent/5 rounded-bl-[200px]" />

    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block">
            <img
              src={logo}
              alt="Career Branding Specialist"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-4 ring-accent/50 mx-auto shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6"
        >
          Elevate Your Career
          <br />
          <span className="text-accent">with Professional Branding</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-primary-foreground/60 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stand out with expertly crafted resumes, ATS optimization, and
          career support that gets you noticed by top employers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-base hover:brightness-110 transition group font-body"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-foreground/10 transition font-body"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
