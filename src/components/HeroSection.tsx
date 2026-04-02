import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const HeroSection = () => (
  <section className="relative min-h-[100vh] flex items-center bg-primary overflow-hidden">
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-80" />
    <div className="absolute top-0 right-0 w-[60%] h-full bg-accent/5 rounded-bl-[200px]" />

    {/* Constellation network SVG */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Lines */}
      <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="hsl(var(--accent))" strokeWidth="1.2" opacity="0.55" />
      <line x1="25%" y1="35%" x2="45%" y2="15%" stroke="hsl(var(--accent))" strokeWidth="1.2" opacity="0.45" />
      <line x1="45%" y1="15%" x2="70%" y2="25%" stroke="hsl(var(--accent))" strokeWidth="1.2" opacity="0.5" />
      <line x1="70%" y1="25%" x2="85%" y2="10%" stroke="hsl(var(--accent))" strokeWidth="1.2" opacity="0.45" />
      <line x1="85%" y1="10%" x2="92%" y2="30%" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
      <line x1="15%" y1="60%" x2="30%" y2="75%" stroke="hsl(var(--accent))" strokeWidth="1.2" opacity="0.45" />
      <line x1="30%" y1="75%" x2="55%" y2="65%" stroke="hsl(var(--accent))" strokeWidth="1.2" opacity="0.5" />
      <line x1="55%" y1="65%" x2="75%" y2="80%" stroke="hsl(var(--accent))" strokeWidth="1.2" opacity="0.45" />
      <line x1="75%" y1="80%" x2="90%" y2="70%" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
      <line x1="25%" y1="35%" x2="15%" y2="60%" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.35" />
      <line x1="45%" y1="15%" x2="55%" y2="65%" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.3" />
      <line x1="70%" y1="25%" x2="75%" y2="80%" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.35" />
      <line x1="5%" y1="85%" x2="15%" y2="60%" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.35" />
      <line x1="55%" y1="65%" x2="45%" y2="90%" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
      <line x1="90%" y1="70%" x2="95%" y2="50%" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.35" />
      <line x1="92%" y1="30%" x2="95%" y2="50%" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
      {/* Glowing nodes */}
      <circle cx="10%" cy="20%" r="4" fill="hsl(var(--accent))" opacity="0.85" />
      <circle cx="25%" cy="35%" r="5" fill="hsl(var(--accent))" opacity="0.9" />
      <circle cx="45%" cy="15%" r="4" fill="hsl(var(--accent))" opacity="0.8" />
      <circle cx="70%" cy="25%" r="4.5" fill="hsl(var(--accent))" opacity="0.85" />
      <circle cx="85%" cy="10%" r="3.5" fill="hsl(var(--accent))" opacity="0.7" />
      <circle cx="92%" cy="30%" r="4" fill="hsl(var(--accent))" opacity="0.75" />
      <circle cx="15%" cy="60%" r="4.5" fill="hsl(var(--accent))" opacity="0.85" />
      <circle cx="30%" cy="75%" r="4" fill="hsl(var(--accent))" opacity="0.8" />
      <circle cx="55%" cy="65%" r="5" fill="hsl(var(--accent))" opacity="0.9" />
      <circle cx="75%" cy="80%" r="4" fill="hsl(var(--accent))" opacity="0.8" />
      <circle cx="90%" cy="70%" r="3.5" fill="hsl(var(--accent))" opacity="0.7" />
      <circle cx="5%" cy="85%" r="3" fill="hsl(var(--accent))" opacity="0.6" />
      <circle cx="45%" cy="90%" r="3.5" fill="hsl(var(--accent))" opacity="0.7" />
      <circle cx="95%" cy="50%" r="3" fill="hsl(var(--accent))" opacity="0.65" />
      {/* Larger glow halos on key nodes */}
      <circle cx="25%" cy="35%" r="14" fill="url(#glow)" opacity="0.4" />
      <circle cx="55%" cy="65%" r="16" fill="url(#glow)" opacity="0.35" />
      <circle cx="70%" cy="25%" r="12" fill="url(#glow)" opacity="0.3" />
    </svg>

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
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover ring-4 ring-accent/50 mx-auto shadow-2xl"
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
