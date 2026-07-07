import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/hero/HeroSection";
import TrustedBySection from "./components/sections/hero/TrustedBy";
import HomePage from "./components/sections/ourpurpose/HomePage";
import { HeroLeftPanel } from "./components/sections/services/HeroLeftPanel";
import { ServicesSection } from "./components/sections/services/ServicesSection";
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
          <ServicesSection />
          <section className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFC] px-6 py-16 md:px-16 lg:px-24 flex items-center justify-center antialiased">
            {/* Geometric Architecture Structural Grid Layer */}
            <div
              className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]"
              aria-hidden="true"
            />

            <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12 z-10">
              <HeroLeftPanel />
              <ServicesSection />
            </div>
          </section>
          {/* <HomePage /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
