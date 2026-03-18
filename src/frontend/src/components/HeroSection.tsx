import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";

const waveBars = [
  { id: "w0", h: 0.3 },
  { id: "w1", h: 0.6 },
  { id: "w2", h: 0.9 },
  { id: "w3", h: 1.0 },
  { id: "w4", h: 0.7 },
  { id: "w5", h: 0.5 },
  { id: "w6", h: 0.8 },
  { id: "w7", h: 1.0 },
  { id: "w8", h: 0.6 },
  { id: "w9", h: 0.4 },
  { id: "w10", h: 0.7 },
  { id: "w11", h: 0.9 },
  { id: "w12", h: 0.5 },
  { id: "w13", h: 0.3 },
];

function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center w-full h-full py-12">
      {/* Glow rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-72 h-72 rounded-full border border-gold/10" />
        <div className="absolute w-[340px] h-[340px] rounded-full border border-gold/[0.06]" />
        <div className="absolute w-96 h-96 rounded-full border border-gold/[0.04]" />
        <div className="absolute w-60 h-60 rounded-full border border-gold/15 pulse-ring" />
      </div>

      {/* Phone frame */}
      <div className="relative w-[220px] h-[460px] rounded-[2.8rem] bg-card border-2 border-border/80 shadow-2xl overflow-hidden z-10">
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-0" />

        <div className="absolute inset-0 pt-12 flex flex-col">
          <div className="flex justify-between items-center px-5 py-1 text-[10px] text-muted-foreground">
            <span>9:41</span>
            <span>◼◼◼</span>
          </div>
          <div className="text-center py-2">
            <div className="text-[11px] font-bold text-gold tracking-widest uppercase">
              EMPIRE VOICE AI
            </div>
          </div>

          <div className="flex flex-col items-center mt-3 gap-2">
            <div className="w-16 h-16 rounded-full bg-secondary border-2 border-gold/30 flex items-center justify-center text-base font-bold text-foreground">
              JM
            </div>
            <div className="text-sm font-semibold text-foreground">
              John Mitchell
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 call-dot" />
              <div
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 call-dot"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 call-dot"
                style={{ animationDelay: "0.4s" }}
              />
              <span className="text-[11px] text-emerald-400 font-medium ml-1">
                AI Answering...
              </span>
            </div>
          </div>

          <div className="flex items-end justify-center gap-[2px] mt-5 h-8 px-8">
            {waveBars.map((bar, i) => (
              <div
                key={bar.id}
                className="wave-bar flex-1 bg-gold-gradient rounded-full"
                style={{
                  height: `${bar.h * 100}%`,
                  minHeight: "3px",
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            ))}
          </div>

          <div className="text-center mt-2 text-xs text-muted-foreground tracking-widest">
            0:47
          </div>

          <div className="mx-3 mt-3 bg-muted/40 rounded-xl p-2.5 border border-border/50">
            <div className="text-[9px] text-gold font-semibold mb-1 uppercase tracking-wide">
              Empire AI
            </div>
            <div className="text-[9px] text-foreground leading-relaxed">
              "Hi! Thanks for calling. I can schedule a plumber for you right
              away — what time works best?"
            </div>
          </div>

          <div className="flex justify-center mt-auto mb-5">
            <div className="w-12 h-12 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center">
              <Phone className="w-5 h-5 text-red-400 rotate-[135deg]" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div
        className="absolute right-0 top-16 float-badge"
        style={{ animationDelay: "0s" }}
      >
        <div className="card-surface rounded-xl px-3 py-2 text-xs font-medium flex items-center gap-2 shadow-gold-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-foreground">24/7 Active</span>
        </div>
      </div>
      <div
        className="absolute left-0 top-28 float-badge"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="card-surface rounded-xl px-3 py-2 text-xs font-medium shadow-lg">
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-foreground ml-1.5">Appt. Booked</span>
        </div>
      </div>
      <div
        className="absolute right-2 bottom-32 float-badge"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="card-surface rounded-xl px-3 py-2 text-xs font-medium shadow-lg">
          <span className="text-gold font-bold">0</span>
          <span className="text-muted-foreground ml-1">Missed Calls</span>
        </div>
      </div>
      <div
        className="absolute left-2 bottom-20 float-badge"
        style={{ animationDelay: "1.8s" }}
      >
        <div className="card-surface rounded-xl px-3 py-2 text-xs font-medium shadow-lg flex items-center gap-1.5">
          <span className="text-gold">★</span>
          <span className="text-foreground">Lead Captured</span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-nyc-bg.dim_1400x900.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 city-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(var(--gold) / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                NYC's #1 AI Receptionist
              </span>
            </motion.div>

            <motion.h1
              className="font-display leading-[1.0] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
                Never Miss a Call
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-black text-gold-gradient mt-1">
                Again.
              </span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Empire Voice AI answers your calls 24/7, books appointments, and
              captures every lead — even after hours. Never lose a customer to
              voicemail again.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                data-ocid="hero.primary_button"
                className="relative inline-flex items-center gap-2 bg-gold-gradient text-background font-bold px-8 py-4 rounded-full shadow-gold-md text-sm transition-all duration-200 hover:scale-[1.04] hover:shadow-gold-lg active:scale-[0.97]"
              >
                <span className="absolute inset-0 rounded-full cta-pulse-ring" />
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+13473219997"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 border border-gold/40 text-gold font-semibold px-8 py-4 rounded-full hover:bg-gold/10 hover:border-gold/70 transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-6 bg-background/30 backdrop-blur-sm border border-border/60 rounded-2xl px-6 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-display font-black text-gold">
                  98%
                </div>
                <div className="text-xs text-muted-foreground">Answer Rate</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-display font-black text-gold">
                  24/7
                </div>
                <div className="text-xs text-muted-foreground">Always On</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-display font-black text-gold">
                  500+
                </div>
                <div className="text-xs text-muted-foreground">
                  NYC Businesses
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative h-[560px] hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
