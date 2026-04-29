import { Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.383.69 4.605 1.882 6.477L4 29l7.706-1.851A11.94 11.94 0 0 0 16.003 27C22.632 27 28 21.627 28 15S22.632 3 16.003 3zm0 21.818a9.84 9.84 0 0 1-5.011-1.37l-.36-.213-4.573 1.099 1.121-4.456-.235-.376A9.79 9.79 0 0 1 6.182 15c0-5.42 4.41-9.818 9.821-9.818 5.412 0 9.818 4.398 9.818 9.818 0 5.421-4.406 9.818-9.818 9.818zm5.39-7.347c-.296-.148-1.748-.862-2.018-.96-.27-.099-.467-.148-.664.149-.197.296-.762.96-.934 1.157-.172.198-.345.222-.64.074-.296-.148-1.249-.46-2.378-1.467-.879-.784-1.473-1.752-1.645-2.048-.172-.296-.018-.456.13-.604.133-.132.296-.345.444-.518.148-.173.197-.296.296-.494.099-.198.05-.371-.025-.519-.074-.148-.664-1.602-.91-2.193-.24-.575-.483-.497-.664-.506l-.566-.01a1.09 1.09 0 0 0-.79.371c-.27.296-1.034 1.011-1.034 2.466 0 1.456 1.058 2.862 1.205 3.06.148.198 2.084 3.184 5.05 4.464.706.305 1.256.487 1.685.624.708.225 1.353.193 1.862.117.568-.084 1.748-.715 1.995-1.405.247-.69.247-1.282.173-1.405-.074-.123-.27-.197-.566-.345z"/>
  </svg>
);

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Career Branding" className="h-10 w-10 rounded-full object-cover ring-2 ring-accent" />
          <span className="font-display text-lg font-bold text-primary-foreground">Career Branding</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://wa.me/13365590647"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition text-sm font-body"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href="mailto:specialistcareerbranding@gmail.com"
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
