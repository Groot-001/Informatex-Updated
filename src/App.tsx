import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/hero/HeroSection";
import TrustedBySection from "./components/sections/hero/TrustedBy";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white p-6">
        <div className="mx-auto max-w-500 rounded-[24px] bg-white shadow-sm">
          <Header />
          <HeroSection />
          <TrustedBySection />
          <Footer />
          {/* <Landing /> */}
        </div>
      </div>
    </>
  );
}

export default App;
