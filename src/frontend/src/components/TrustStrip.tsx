import { Car, Stethoscope, Wind, Wrench } from "lucide-react";
import { motion } from "motion/react";

const partners = [
  { id: "plumbing", icon: Wrench, name: "Plumbing Co.", location: "Brooklyn" },
  { id: "hvac", icon: Wind, name: "HVAC Pros", location: "Queens" },
  { id: "auto", icon: Car, name: "Auto Group", location: "Bronx" },
  {
    id: "dental",
    icon: Stethoscope,
    name: "Dental Care",
    location: "Manhattan",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card/40 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
            Trusted by NYC Businesses
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {partners.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border/50 hover:border-gold/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-foreground">
                  {p.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {p.location}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
