import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-card/30 relative overflow-hidden">
      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(var(--gold) / 0.06) 0%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 city-grid opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-6">
              Get Started Today
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              Start Capturing{" "}
              <span className="text-gold-gradient">Every Call</span>
              <br />
              Today.
            </h2>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join hundreds of NYC business owners who stopped losing money to
            missed calls. Your AI receptionist is ready to start answering in 24
            hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              data-ocid="cta.primary_button"
              className="relative inline-flex items-center gap-2 bg-gold-gradient text-background font-bold px-8 py-4 rounded-full shadow-gold-md text-base transition-all duration-200 hover:scale-[1.04] hover:shadow-gold-lg active:scale-[0.97]"
            >
              <span className="absolute inset-0 rounded-full cta-pulse-ring" />
              Book Free Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              data-ocid="cta.secondary_button"
              className="inline-flex items-center gap-2 border border-gold/30 text-foreground font-semibold px-8 py-4 rounded-full hover:border-gold/70 hover:text-gold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] text-base"
            >
              Get Started
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm">
            <Phone className="w-4 h-4 text-gold" />
            <span>Or call us directly:</span>
            <a
              href="tel:+13473219997"
              className="text-gold font-semibold hover:underline"
            >
              (347) 321-9997
            </a>
          </div>

          <p className="text-muted-foreground/60 text-xs">
            No setup fee · Cancel anytime · Live in 24 hours · Serving NYC
            businesses since 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}
