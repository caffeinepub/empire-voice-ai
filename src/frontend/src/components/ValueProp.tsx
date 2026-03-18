import {
  AlertTriangle,
  DollarSign,
  PhoneOff,
  TrendingDown,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    id: "avg-value",
    icon: DollarSign,
    value: "$230",
    label: "Average value of a missed service call",
  },
  {
    id: "no-callback",
    icon: PhoneOff,
    value: "23%",
    label: "Callers who never call back after going to voicemail",
  },
  {
    id: "competitor",
    icon: TrendingDown,
    value: "62%",
    label: "Of missed calls become a competitor's customer",
  },
  {
    id: "annual-loss",
    icon: AlertTriangle,
    value: "$47K",
    label: "Average annual revenue lost to missed calls per business",
  },
];

export function ValueProp() {
  return (
    <section className="py-20 lg:py-28 bg-card/30 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(var(--gold) / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            The Real Cost
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Every Missed Call ={" "}
            <span className="text-gold-gradient">Lost Revenue</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Most business owners don't realize how much money walks out the door
            when a call goes unanswered. Empire Voice AI closes that gap —
            automatically.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="p-6 rounded-2xl bg-card border border-border text-center group hover:border-gold/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="font-display font-black text-4xl text-gold mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          className="rounded-2xl bg-card border border-gold/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 card-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
              Empire Voice AI recovers those calls — automatically.
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
              Our AI answers within 1 second, qualifies the lead, and books the
              appointment before your competitor even calls back.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-gold-gradient text-background font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-gold-sm whitespace-nowrap"
          >
            Start Recovering Revenue
          </a>
        </motion.div>
      </div>
    </section>
  );
}
