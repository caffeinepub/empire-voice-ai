import { Check, X } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$297",
    period: "/ month",
    tagline: "Perfect for solo operators and small teams",
    highlighted: false,
    features: [
      { text: "24/7 AI call answering", included: true },
      { text: "Up to 300 calls/month", included: true },
      { text: "Appointment booking", included: true },
      { text: "SMS confirmation to customers", included: true },
      { text: "Lead capture & email alerts", included: true },
      { text: "Spam call filtering", included: true },
      { text: "SMS follow-up sequences", included: false },
      { text: "Missed call recovery", included: false },
      { text: "CRM integration", included: false },
    ],
    cta: "Get Started",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$497",
    period: "/ month",
    tagline: "For growing businesses that can't miss anything",
    highlighted: true,
    badge: "Most Popular",
    features: [
      { text: "24/7 AI call answering", included: true },
      { text: "Unlimited calls", included: true },
      { text: "Appointment booking", included: true },
      { text: "SMS confirmation to customers", included: true },
      { text: "Lead capture & email alerts", included: true },
      { text: "Spam call filtering", included: true },
      { text: "SMS follow-up sequences", included: true },
      { text: "Missed call recovery (60s)", included: true },
      { text: "CRM integration (Jobber, HubSpot)", included: true },
    ],
    cta: "Book a Demo",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Simple Pricing
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Transparent, No-Surprise Pricing
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            No setup fee. No long-term contracts. Cancel anytime. Start
            capturing calls today.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <Check className="w-4 h-4 text-emerald-400" /> No setup fee
            </span>
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <Check className="w-4 h-4 text-emerald-400" /> Cancel anytime
            </span>
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <Check className="w-4 h-4 text-emerald-400" /> 14-day free trial
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`relative p-8 rounded-2xl flex flex-col ${
                plan.highlighted
                  ? "bg-card card-glow"
                  : "bg-card border border-border"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-gradient text-background text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display font-bold text-xl text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.tagline}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-black text-5xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* FIX 3: Starter CTA uses gold border for consistency; Pro CTA gets scale */}
              <a
                href="#contact"
                data-ocid={
                  plan.highlighted
                    ? "pricing.primary_button"
                    : "pricing.secondary_button"
                }
                className={`block text-center font-bold py-4 rounded-full transition-all duration-200 text-sm hover:scale-[1.02] active:scale-[0.97] ${
                  plan.highlighted
                    ? "bg-gold-gradient text-background hover:opacity-90 shadow-gold-sm hover:shadow-gold-md"
                    : "border border-gold/30 text-foreground hover:border-gold/70 hover:text-gold"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Need a custom plan for a larger operation?{" "}
          <a href="#contact" className="text-gold hover:underline font-medium">
            Contact us
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
