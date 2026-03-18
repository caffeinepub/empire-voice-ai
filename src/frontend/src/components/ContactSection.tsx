import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitContact } from "../hooks/useQueries";

const businessTypes = [
  "Plumbing",
  "HVAC",
  "Electrical",
  "Car Dealership",
  "Dental Office",
  "Salon / Spa",
  "Home Services",
  "Other",
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const { mutate, isPending, isSuccess, isError, reset } = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        setForm({
          name: "",
          email: "",
          phone: "",
          businessType: "",
          message: "",
        });
      },
    });
  };

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Let's Talk
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Book Your Free Demo
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Tell us about your business and we'll show you exactly how Empire
            Voice AI can start capturing your missed calls — live, in under 30
            minutes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Based in New York City, serving local businesses across all five
                boroughs.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="tel:+19295019225"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                    Phone
                  </div>
                  <div className="text-foreground font-semibold group-hover:text-gold transition-colors">
                    929-501-9225
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@empirevoiceai.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                    Email
                  </div>
                  <div className="text-foreground font-semibold group-hover:text-gold transition-colors">
                    info@empirevoiceai.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                    Location
                  </div>
                  <div className="text-foreground font-semibold">
                    New York City, NY
                  </div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    Serving all 5 boroughs
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-gold/20 space-y-2">
              <div className="text-gold text-sm font-semibold">
                Response Time
              </div>
              <p className="text-muted-foreground text-sm">
                We respond to all demo requests within{" "}
                <span className="text-foreground font-medium">
                  2 business hours
                </span>
                . Most demos are scheduled same-day or next day.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="bg-card border border-border rounded-2xl p-8"
              data-ocid="contact.panel"
            >
              {isSuccess ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Request Received!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    We'll reach out within 2 hours to schedule your free demo.
                    Keep an eye on your inbox.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-2 text-gold text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-muted-foreground text-sm"
                      >
                        Full Name <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="name"
                        data-ocid="contact.input"
                        placeholder="John Mitchell"
                        value={form.name}
                        onChange={handleChange("name")}
                        required
                        className="bg-muted/40 border-border focus:border-gold/50 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-muted-foreground text-sm"
                      >
                        Email <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@business.com"
                        value={form.email}
                        onChange={handleChange("email")}
                        required
                        className="bg-muted/40 border-border focus:border-gold/50 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-muted-foreground text-sm"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(212) 555-1234"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        className="bg-muted/40 border-border focus:border-gold/50 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-muted-foreground text-sm">
                        Business Type
                      </Label>
                      <Select
                        value={form.businessType}
                        onValueChange={(val) =>
                          setForm((prev) => ({ ...prev, businessType: val }))
                        }
                      >
                        <SelectTrigger
                          data-ocid="contact.select"
                          className="bg-muted/40 border-border text-foreground data-[placeholder]:text-muted-foreground/50"
                        >
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          {businessTypes.map((type) => (
                            <SelectItem
                              key={type}
                              value={type}
                              className="text-foreground hover:text-gold focus:text-gold"
                            >
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-muted-foreground text-sm"
                    >
                      Tell us about your business
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="contact.textarea"
                      placeholder="How many calls do you receive daily? What are your biggest challenges with missed calls?"
                      value={form.message}
                      onChange={handleChange("message")}
                      rows={4}
                      className="bg-muted/40 border-border focus:border-gold/50 text-foreground placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  {isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or call us
                      directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isPending}
                    className="w-full bg-gold-gradient text-background font-bold py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2 text-sm"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span data-ocid="contact.loading_state">
                          Sending...
                        </span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Book My Free Demo
                      </>
                    )}
                  </button>

                  <p className="text-center text-muted-foreground/60 text-xs">
                    No commitment required. We'll show you a live demo tailored
                    to your industry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
