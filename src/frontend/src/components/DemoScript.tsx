import { Bot, User } from "lucide-react";
import { motion } from "motion/react";

const conversation = [
  {
    id: "msg-1",
    role: "caller" as const,
    name: "John M.",
    text: "Hi, I've got a burst pipe under my kitchen sink — it's flooding. Do you have anyone available today?",
    time: "2:47 PM",
  },
  {
    id: "msg-2",
    role: "ai" as const,
    name: "Empire AI",
    text: "Hi John! I'm so sorry to hear that — let's get you fixed up right away. I can have a licensed plumber at your location within the hour. Can I get your address?",
    time: "2:47 PM",
  },
  {
    id: "msg-3",
    role: "caller" as const,
    name: "John M.",
    text: "It's 147 Atlantic Ave, Brooklyn, Apt 3B.",
    time: "2:48 PM",
  },
  {
    id: "msg-4",
    role: "ai" as const,
    name: "Empire AI",
    text: "Perfect. I've got Mike, our top emergency plumber, available now. He'll be there by 4:00 PM today. I'm booking you right now — you'll receive a confirmation text in about 30 seconds.",
    time: "2:48 PM",
  },
  {
    id: "msg-5",
    role: "caller" as const,
    name: "John M.",
    text: "Amazing, thank you so much!",
    time: "2:49 PM",
  },
  {
    id: "msg-6",
    role: "ai" as const,
    name: "Empire AI",
    text: "You're all set, John! ✓ Appointment booked for 4:00 PM. Mike will call you 20 minutes before arrival. Is there anything else I can help you with?",
    time: "2:49 PM",
  },
];

export function DemoScript() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            See It In Action
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Live AI Call Demo
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Watch how Empire Voice AI handles a real emergency plumbing call —
            from first ring to booked appointment in under 2 minutes.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Phone UI frame */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center">
                  <Bot className="w-4 h-4 text-background" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Empire Voice AI
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400">
                      Active — Plumbing Emergency
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                Live Transcript
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 max-h-[480px] overflow-y-auto">
              {conversation.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === "ai" ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                      msg.role === "ai"
                        ? "bg-gold-gradient text-background"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {msg.role === "ai" ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[80%] ${
                      msg.role === "caller" ? "items-end" : "items-start"
                    } flex flex-col gap-1`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-muted-foreground">
                        {msg.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground/60">
                        {msg.time}
                      </span>
                    </div>
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "ai"
                          ? "bg-gold/10 border border-gold/20 text-foreground rounded-tl-sm"
                          : "bg-secondary text-foreground rounded-tr-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-4 bg-card/50">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-muted/50 rounded-full px-4 py-2.5 text-sm text-muted-foreground">
                  Your AI receptionist handles this automatically...
                </div>
                <div className="bg-gold-gradient w-9 h-9 rounded-full flex items-center justify-center">
                  <span className="text-background font-bold text-sm">↑</span>
                </div>
              </div>
            </div>
          </div>

          <motion.p
            className="text-center text-muted-foreground text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            This entire conversation took{" "}
            <span className="text-gold font-semibold">under 2 minutes</span> and
            resulted in a booked appointment.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
