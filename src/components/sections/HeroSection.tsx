import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFloatingCards from "./HeroFloatingcards";
import HeroFloatingIcons from "./HeroFloatingIcons";
// import HeroIllustration from "./HeroIllustration";

const HeroSection = () => {
  return (
    <>
      {/* <div className="">
        <div className="relative h-30 w-65 overflow-hidden rounded-xl border border-[#E6DEFF] bg-white p-5 shadow-[0_8px_24px_rgba(120,90,255,0.08)]">
          <FaGlobeAmericas className="absolute -right-6 -top-6 text-[110px] text-[#8B5CF6]/15" />

          <h2 className="text-[48px] font-bold leading-none text-[#5B4BC4]">
            20 <span className="font-semibold">+</span>
          </h2>

          <p className="mt-3 text-[18px] font-medium text-black">
            Countries Served
          </p>
        </div>

        <div>
          <div
            className="w-55 rounded-xl
        border border-[#E7E0FF] bg-whitepx-5 py-4 shadow-[0px_12px_30px_rgba(108,99,255,0.08)] transition-all duration-300  hover:-translate-y-1 hover:shadow-[0px_16px_40px_rgba(108,99,255,0.12)]"
          >
            <h2 className="text-[38px] font-bold leading-none tracking-tight text-[#5C4BC7]">
              500+
            </h2>

            <p className="mt-2 text-[20px] font-medium leading-tight text-[#1E1E1E]">
              Projects Delivered
            </p>
          </div>
        </div>
      </div> */}

      <section
        className="
        relative
        isolate
        overflow-hidden
        px-6
        py-28
      "
      >
        <HeroBackground />

        <HeroFloatingCards />

        <HeroFloatingIcons />

        <div
          className="
    relative
    z-10
    mx-auto
    flex
    max-w-7xl
    flex-col
    items-center
    gap-16
    px-6
    lg:flex-row
    lg:justify-between
  "
        >
          <HeroContent />
          {/* <HeroIllustration /> */}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
