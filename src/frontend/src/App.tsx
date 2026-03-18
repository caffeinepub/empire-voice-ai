import { Toaster } from "@/components/ui/sonner";
import { ContactSection } from "./components/ContactSection";
import { DemoScript } from "./components/DemoScript";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { TrustStrip } from "./components/TrustStrip";
import { ValueProp } from "./components/ValueProp";
import { WhoItsFor } from "./components/WhoItsFor";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <HowItWorks />
        <Features />
        <WhoItsFor />
        <ValueProp />
        <DemoScript />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
