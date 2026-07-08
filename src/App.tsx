import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/hero/HeroSection";
import TrustedBySection from "./components/sections/hero/TrustedBy";
import HomePage from "./components/sections/ourpurpose/HomePage";
import ProcessSection from "./components/sections/services/development-process/ProcessSection";
import ServicesSection from "./components/sections/services/development-services/ServicesSection";
import Hero from "./components/sections/services/hero/Hero";
import StatsSection from "./components/sections/stats/StatsSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white p-6">
        <div className="mx-auto max-w-500 rounded-[24px] bg-white shadow-sm">
          <Header />
          <HeroSection />
          <TrustedBySection />
          <StatsSection />
          <Hero />
          <ServicesSection />
          <ProcessSection />
          <HomePage />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
