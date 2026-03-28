import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-primary py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Career Branding" className="h-10 w-10 rounded-full object-cover border-2 border-accent" />
          <span className="font-display text-lg font-bold text-primary-foreground">Career Branding</span>
        </div>

        <div className="text-center md:text-right space-y-1">
          <p className="text-primary-foreground/60 text-sm font-body">
            <a href="mailto:specialistcareerbranding@gmail.com" className="hover:text-accent transition">
              specialistcareerbranding@gmail.com
            </a>
          </p>
          <p className="text-primary-foreground/60 text-sm font-body">
            <a href="https://wa.me/13365590647" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              +1 336 559 0647
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
        <p className="text-primary-foreground/40 text-xs font-body">
          © {new Date().getFullYear()} Career Branding Specialist. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
