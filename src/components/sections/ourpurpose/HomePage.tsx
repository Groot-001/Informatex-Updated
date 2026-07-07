import AboutSection from "./AboutSection";
import ProductsSection from "./ProductSection";
import TeamSection from "./TeamSection";
import WhyChooseSection from "./WhyChooseSection";

export default function HomePage() {
  return (
    <main className="w-full">
      <AboutSection />
      <ProductsSection />
      <TeamSection />
      <WhyChooseSection />
    </main>
  );
}
