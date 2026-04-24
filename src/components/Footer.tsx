import { MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Career Branding" className="h-10 w-10 rounded-full object-cover ring-2 ring-accent" />
          <span className="font-display text-lg font-bold text-primary-foreground">Career Branding</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://wa.me/2349164617938"
            target="_top"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition text-sm font-body"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href="mailto:omobuwajoblessing@gmail.com"
            className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition text-sm font-body"
          >
            <Mail className="w-4 h-4" />
            <span>Email Us</span>
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
        <p className="text-primary-foreground/40 text-xs font-body">
          © {new Date().getFullYear()} Career Branding. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
