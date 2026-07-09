import HeroSection from "@/components/sections/hero/HeroSection";
import TrustedBySection from "@/components/sections/hero/TrustedBy";
import OurPurpose from "@/components/sections/ourpurpose/OurPurpose";
import StatsSection from "@/components/sections/stats/StatsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <StatsSection />
      <OurPurpose />
    </>
  );
};

export default HomePage;
