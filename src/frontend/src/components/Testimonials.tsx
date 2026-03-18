import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    id: "mike",
    quote:
      "Before Empire Voice AI, I was losing 8-10 calls a week to voicemail. Now every single call gets answered. I picked up 3 new emergency jobs last week alone that I would have missed. This thing literally pays for itself in one job.",
    name: "Mike Torres",
    title: "Owner, Torres HVAC",
    location: "Brooklyn, NY",
    initials: "MT",
    revenue: "+$4,200/mo in recovered calls",
  },
  {
    id: "sarah",
    quote:
      "Our front desk was overwhelmed with appointment calls during peak hours. Empire Voice AI handles the overflow seamlessly. Patients love that they always get someone on the line. Our no-show rate dropped 35% after adding the SMS reminders.",
    name: "Sarah Liang",
    title: "Office Manager, Liang Family Dental",
    location: "Manhattan, NY",
    initials: "SL",
    revenue: "35% fewer no-shows",
  },
  {
    id: "carlos",
    quote:
      "Running a plumbing business in Queens means emergencies at 2am. Empire Voice AI answers those calls, qualifies the job, and texts me the details. I wake up to a booked job. My competitors are sleeping through those calls. I'm not.",
    name: "Carlos Rivera",
    title: "Owner, Rivera Plumbing Co.",
    location: "Queens, NY",
    initials: "CR",
    revenue: "12 new jobs/month from after-hours",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className="w-4 h-4 text-gold fill-gold" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Real Results
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            NYC Business Owners Love It
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Don't take our word for it — hear from the business owners who use
            Empire Voice AI every day.
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-3 gap-6"
          data-ocid="testimonials.list"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              data-ocid={`testimonials.item.${i + 1}`}
              className="p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors flex flex-col gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <StarRating />

              <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              <div className="bg-gold/10 border border-gold/20 rounded-xl px-3 py-2">
                <span className="text-gold text-xs font-semibold">
                  {t.revenue}
                </span>
              </div>

              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-background font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-muted-foreground text-xs">{t.title}</div>
                  <div className="text-gold text-xs font-medium">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
