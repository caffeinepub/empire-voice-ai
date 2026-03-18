import {
  Calendar,
  Clock,
  MessageSquare,
  PhoneMissed,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    id: "answering",
    icon: Clock,
    title: "24/7 Call Answering",
    description:
      "Your AI receptionist never sleeps. Every call is answered immediately, any time of day or night — even on holidays.",
  },
  {
    id: "booking",
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "The AI syncs with your calendar and books appointments in real-time, eliminating back-and-forth scheduling.",
  },
  {
    id: "sms",
    icon: MessageSquare,
    title: "SMS Follow-ups",
    description:
      "Automatic SMS confirmations and follow-ups keep your customers engaged and reduce no-shows by up to 40%.",
  },
  {
    id: "recovery",
    icon: PhoneMissed,
    title: "Missed Call Recovery",
    description:
      "When calls slip through, our system automatically reaches back out via text within 60 seconds to recover the lead.",
  },
  {
    id: "spam",
    icon: ShieldCheck,
    title: "Spam Filtering",
    description:
      "Advanced AI filters out robocalls and spam, so you only hear about real customers who want your services.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Everything You Need
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Powerful Features
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Built specifically for service businesses in NYC. Every feature
            designed to capture more revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 group hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}

          {/* Promo card */}
          <motion.div
            className="p-6 rounded-2xl bg-gold-gradient flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div>
              <div className="text-background/70 text-xs font-semibold uppercase tracking-widest mb-3">
                Get Started Today
              </div>
              <h3 className="font-display font-bold text-xl text-background mb-2">
                Ready to capture every call?
              </h3>
              <p className="text-background/75 text-sm leading-relaxed">
                Join 500+ NYC businesses already using Empire Voice AI.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-block bg-background text-gold font-bold text-sm px-5 py-2.5 rounded-full text-center hover:bg-background/90 transition-colors"
            >
              Book Free Demo →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
