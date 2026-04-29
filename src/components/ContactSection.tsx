import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-accent font-bold text-sm uppercase tracking-widest font-body">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground font-body">
            Reach out through any channel below or fill out the form.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href="https://wa.me/13365590647?text=Hi%2C%20I%27m%20interested%20in%20your%20career%20branding%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-background border border-border rounded-2xl p-5 hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">WhatsApp</p>
                <p className="font-display font-bold text-foreground group-hover:text-accent transition-colors">+1 (336) 559-0647</p>
              </div>
            </a>


            <a
              href="mailto:specialistcareerbranding@gmail.com"
              className="flex items-center gap-4 bg-background border border-border rounded-2xl p-5 hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Email</p>
                <p className="font-display font-bold text-foreground group-hover:text-accent transition-colors break-all">specialistcareerbranding@gmail.com</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-border rounded-2xl p-7 md:p-8 space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={4}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                placeholder="Tell us about your career goals..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-accent text-accent-foreground py-3.5 rounded-xl font-bold text-sm hover:brightness-110 transition flex items-center justify-center gap-2 disabled:opacity-60 font-body"
            >
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
