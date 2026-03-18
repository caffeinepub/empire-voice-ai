import { Car, Scissors, Stethoscope, Wind, Wrench, Zap } from "lucide-react";
import { motion } from "motion/react";

const industries = [
  {
    id: "plumbing",
    icon: Wrench,
    name: "Plumbers",
    description:
      "Capture emergency calls and book service visits around the clock.",
    highlight: "Emergency calls = big revenue",
  },
  {
    id: "hvac",
    icon: Wind,
    name: "HVAC Companies",
    description:
      "Never miss a heating or cooling emergency. Book seasonal tune-ups automatically.",
    highlight: "Peak season covered",
  },
  {
    id: "auto",
    icon: Car,
    name: "Car Dealerships",
    description:
      "Qualify buyers, schedule test drives, and follow up on inquiries 24/7.",
    highlight: "Close more deals",
  },
  {
    id: "dental",
    icon: Stethoscope,
    name: "Dental Offices",
    description:
      "Handle appointment requests after hours and reduce front-desk workload.",
    highlight: "Fill your calendar",
  },
  {
    id: "salon",
    icon: Scissors,
    name: "Salons & Spas",
    description:
      "Book appointments, handle cancellations, and send reminders automatically.",
    highlight: "Zero no-shows",
  },
  {
    id: "electrical",
    icon: Zap,
    name: "Electricians",
    description:
      "Prioritize urgent calls and dispatch efficiently with instant intake.",
    highlight: "Faster response time",
  },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Built for Your Industry
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Who It's For
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Empire Voice AI is tailored for NYC's busiest service industries —
            the ones where every call counts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              className="p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors">
                  <industry.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {industry.description}
                  </p>
                  <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-2.5 py-1 rounded-full border border-gold/20">
                    {industry.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
