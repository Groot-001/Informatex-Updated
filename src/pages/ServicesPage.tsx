import ProcessSection from "@/components/sections/services/development-process/ProcessSection";
import ServicesSection from "@/components/sections/services/development-services/ServicesSection";
import Hero from "@/components/sections/services/hero/Hero";
import WhyBusinessChooseSection from "@/components/sections/services/why-chooseus/WhyBusinessChooseSection";

const ServicesPage = () => {
  return (
    <>
      <div>
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <WhyBusinessChooseSection />
      </div>
    </>
  );
};

export default ServicesPage;
