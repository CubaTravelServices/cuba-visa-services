import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AirlineStrip from "@/components/AirlineStrip";
import TrustStatsBar from "@/components/TrustStatsBar";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import WhyUsDark from "@/components/WhyUsDark";
import AirportPresence from "@/components/AirportPresence";
import ServicesGrid from "@/components/ServicesGrid";
import CredentialsBar from "@/components/CredentialsBar";
import GeoContentBlock from "@/components/GeoContentBlock";
import ReviewsSection from "@/components/ReviewsSection";
import FaqAccordion from "@/components/FaqAccordion";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <main>
      <HeroSection />
      <AirlineStrip />
      <TrustStatsBar />
      <HowItWorks />
      <PricingSection />
      <WhyUsDark />
      <AirportPresence />
      <ServicesGrid />
      <CredentialsBar />
      <GeoContentBlock />
      <ReviewsSection />
      <FaqAccordion />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default Index;
