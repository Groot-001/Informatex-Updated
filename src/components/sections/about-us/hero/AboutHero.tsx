import PrimaryButton from "@/components/sections/about-us/hero/PrimaryButton";
import SecondaryButton from "@/components/sections/about-us/hero/SecondaryButton";
import SectionBadge from "@/components/sections/about-us/hero/SectionBadge";
import { aboutStats } from "@/components/sections/about-us/hero/aboutstats";
import group from "@/assets/AboutHero.png";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

const AboutHeroSection = () => {
  return (
    <Section className="relative overflow-hidden bg-[#F7F9FC] py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#2374B6]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#093254]/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <SectionBadge title="Who We Are" />

            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-[#0E2439] sm:text-5xl lg:text-6xl">
              Empowering Businesses
              <span className="block text-[#2374B6]">Through Technology</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#546577]">
              We help businesses transform ideas into scalable digital solutions
              through innovative software development, enterprise services and
              modern technology.
            </p>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-[#D7E5F3] py-8">
              {aboutStats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-3xl font-bold text-[#093254]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-[#546577]">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton title="Work With Us" />

              <SecondaryButton title="Join Our Team" />
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">
            {/* Glow */}

            <div className="absolute h-[320px] w-[320px] rounded-full bg-[#2374B6]/15 blur-[120px]" />

            {/* Image */}

            <div
              className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#D7E5F3]
              bg-white
              shadow-2xl
            "
            >
              <img
                src={group}
                alt="Informatex Team"
                className="
                  h-[260px]
                  w-full
                  object-cover

                  sm:h-[360px]

                  lg:h-[430px]
                  lg:w-[560px]
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutHeroSection;
