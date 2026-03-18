import { Mail, MapPin, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Demo", href: "#contact" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Plumbers", href: "#who-its-for" },
      { label: "HVAC", href: "#who-its-for" },
      { label: "Dentists", href: "#who-its-for" },
      { label: "Car Dealerships", href: "#who-its-for" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#how-it-works" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* NYC skyline silhouette */}
      <div className="absolute bottom-0 right-0 w-full pointer-events-none opacity-[0.03]">
        <svg
          viewBox="0 0 1200 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
          role="presentation"
        >
          <title>NYC Skyline</title>
          <path
            d="M0,160 L0,100 L30,100 L30,80 L50,80 L50,60 L60,60 L60,40 L70,40 L70,20 L80,20 L80,40 L90,40 L90,60 L100,60 L100,50 L110,50 L110,30 L120,30 L120,15 L130,15 L130,30 L140,30 L140,50 L150,50 L150,40 L160,40 L160,20 L170,20 L170,0 L180,0 L180,20 L190,20 L190,40 L200,40 L200,30 L210,30 L210,50 L220,50 L220,35 L230,35 L230,55 L240,55 L240,70 L260,70 L260,50 L270,50 L270,30 L280,30 L280,50 L290,50 L290,60 L300,60 L300,40 L310,40 L310,20 L320,20 L320,5 L330,5 L330,20 L340,20 L340,40 L350,40 L350,60 L370,60 L370,45 L380,45 L380,30 L390,30 L390,45 L400,45 L400,60 L420,60 L420,75 L440,75 L440,55 L450,55 L450,35 L460,35 L460,20 L470,20 L470,10 L480,10 L480,20 L490,20 L490,35 L500,35 L500,55 L510,55 L510,70 L530,70 L530,50 L540,50 L540,60 L560,60 L560,45 L570,45 L570,30 L580,30 L580,15 L590,15 L590,30 L600,30 L600,45 L620,45 L620,60 L640,60 L640,70 L660,70 L660,55 L670,55 L670,40 L680,40 L680,25 L690,25 L690,40 L700,40 L700,55 L720,55 L720,70 L740,70 L740,50 L750,50 L750,35 L760,35 L760,50 L770,50 L770,65 L790,65 L790,50 L800,50 L800,35 L810,35 L810,20 L820,20 L820,10 L830,10 L830,20 L840,20 L840,35 L850,35 L850,50 L870,50 L870,65 L890,65 L890,50 L900,50 L900,65 L920,65 L920,75 L940,75 L940,60 L950,60 L950,45 L960,45 L960,60 L970,60 L970,75 L990,75 L990,60 L1000,60 L1000,45 L1010,45 L1010,30 L1020,30 L1020,45 L1030,45 L1030,60 L1050,60 L1050,70 L1070,70 L1070,55 L1080,55 L1080,70 L1100,70 L1100,80 L1120,80 L1120,90 L1150,90 L1150,100 L1200,100 L1200,160 Z"
            fill="currentColor"
            className="text-gold"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gold-gradient rounded-xl flex items-center justify-center">
                <Phone className="w-4 h-4 text-background" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg">
                <span className="text-gold">Empire</span>
                <span className="text-foreground"> Voice AI</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              NYC's premier AI voice receptionist service. Never miss a call,
              never lose a customer.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+19295019225"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                929-501-9225
              </a>
              <a
                href="mailto:info@empirevoiceai.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@empirevoiceai.com
              </a>
              <span className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                New York City, NY
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-foreground font-semibold text-sm mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            Serving NYC businesses since 2024 · All five boroughs
          </p>
          <p className="text-muted-foreground text-xs">
            © {currentYear}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined"
                  ? window.location.hostname
                  : "empirevoiceai.com",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
