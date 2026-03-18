import { Calendar, MessageSquare, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    id: "answer",
    number: "01",
    icon: PhoneCall,
    title: "We Answer Instantly",
    description:
      "The moment your phone rings, Empire Voice AI picks up — day or night, weekends and holidays. Zero wait time, zero missed opportunities.",
  },
  {
    id: "talk",
    number: "02",
    icon: MessageSquare,
    title: "We Talk Naturally Using AI",
    description:
      "Our AI voice agent converses naturally with your customers, answers questions, and handles objections — just like a trained receptionist would.",
  },
  {
    id: "book",
    number: "03",
    icon: Calendar,
    title: "We Book & Send Leads",
    description:
      "Appointments get booked directly into your calendar. Qualified leads are sent to you instantly via text and email. You just show up and work.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Up and running in under 24 hours. No complex setup, no technical
            expertise required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[25%] right-[25%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background border border-border text-gold text-xs font-black font-display px-3 py-1 rounded-full">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 mt-4 group-hover:bg-gold/15 transition-colors">
                <step.icon className="w-7 h-7 text-gold" />
              </div>

              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
