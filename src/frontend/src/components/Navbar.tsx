import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    setIsMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gold-gradient rounded-xl flex items-center justify-center shadow-gold-sm">
              <Phone className="w-4 h-4 text-background" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              <span className="text-gold">Empire</span>
              <span className="text-foreground"> Voice AI</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+13473219997"
              className="text-muted-foreground hover:text-gold transition-colors text-sm font-medium flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              (347) 321-9997
            </a>
            <a
              href="#contact"
              data-ocid="nav.primary_button"
              className="bg-gold-gradient text-background font-semibold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-gold-sm"
            >
              Book a Demo
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden text-foreground p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="nav.link"
                  className="block text-muted-foreground hover:text-foreground py-3 text-sm font-medium border-b border-border last:border-0 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+13473219997"
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (347) 321-9997
                </a>
                <button
                  type="button"
                  data-ocid="nav.primary_button"
                  onClick={scrollToContact}
                  className="w-full bg-gold-gradient text-background font-semibold text-sm px-5 py-3 rounded-full text-center"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
