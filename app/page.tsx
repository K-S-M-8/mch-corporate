import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import GovernanceFramework from "./components/GovernanceFramework";
import MandatePortal from "./components/MandatePortal";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-premium selection:text-black">
      {/* Global Fixed Navigation Header */}
      <Navbar />
      
      {/* Primary Cinematic Entryway */}
      <Hero />

      {/* Structured Portfolio Matrix (Data-driven 8 Pillars) */}
      <BentoGrid />

      {/* Corporate Governance & Value Synergy Architecture */}
      <GovernanceFramework />

      {/* Secure Executive Engagement Channel */}
      <MandatePortal />

      {/* Global Executive Footer Architecture */}
      <Footer />
    </main>
  );
}