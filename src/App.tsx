import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/NavBar";
import HeroSection from "./components/sections/hero/HeroSection";
import TrustedBySection from "./components/sections/hero/TrustedBy";
import HomePage from "./components/sections/ourpurpose/HomePage";
import CustomSolution from "./components/sections/products/custom-solution";
import FeaturedProducts from "./components/sections/products/Featured-Products";
import ProductHero from "./components/sections/products/hero";
import WhyChooseProducts from "./components/sections/products/why-choose-products";
import ProcessSection from "./components/sections/services/development-process/ProcessSection";
import ServicesSection from "./components/sections/services/development-services/ServicesSection";
import Hero from "./components/sections/services/hero/Hero";
import WhyBusinessChooseSection from "./components/sections/services/why-chooseus/WhyBusinessChooseSection";
import StatsSection from "./components/sections/stats/StatsSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white p-6">
        <div className="mx-auto max-w-500 rounded-[24px] bg-white shadow-sm">
          <Header />
          <ProductHero />
          <FeaturedProducts />
          <CustomSolution />
          <WhyChooseProducts />
          <HeroSection />
          <TrustedBySection />
          <StatsSection />
          <Hero />
          <ServicesSection />
          <ProcessSection />
          <WhyBusinessChooseSection />
          <HomePage />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
