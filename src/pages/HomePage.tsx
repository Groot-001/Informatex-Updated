import HeroSection from "@/components/sections/hero/HeroSection";
import TrustedBySection from "@/components/sections/hero/TrustedBy";
import OurPurpose from "@/components/sections/ourpurpose/OurPurpose";
import Hero from "@/components/sections/services/hero/Hero";
import StatsSection from "@/components/sections/stats/StatsSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroSection />
      <TrustedBySection />
      <StatsSection />
      <OurPurpose />
    </>
  );
};

export default HomePage;
