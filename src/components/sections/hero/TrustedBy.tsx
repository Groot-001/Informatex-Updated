import image1 from "@/assets/company logo1 (1)/blue peak bw.png";
import image2 from "@/assets/company logo1 (1)/horizon bw.png";
import image3 from "@/assets/company logo1 (1)/sunrise bw.png";
import image4 from "@/assets/company logo1 (1)/wander way bw.png";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

interface LogoItem {
  name: string;
  image: string;
}

interface TrustedBySectionProps {
  heading?: string;
  logos?: LogoItem[];
  className?: string;
}

const DEFAULT_LOGOS: LogoItem[] = [
  {
    name: "Blue Peak Digital",
    image: image1,
  },
  {
    name: "Horizon",
    image: image2,
  },
  {
    name: "Sunrise Tours",
    image: image3,
  },
  {
    name: "Wander Way",
    image: image4,
  },
];

export default function TrustedBySection({
  heading = "Trusted by leading companies worldwide",
  logos = DEFAULT_LOGOS,
  className = "",
}: TrustedBySectionProps) {
  return (
    <Section
      className={`
        bg-soft
        py-14
        md:py-16
        lg:py-20
        ${className}
      `}
    >
      <Container>
        {/* Heading */}

        <h3
          className="
    text-center

    text-[22px]
    font-medium

    text-[#5A5A5A]
  "
        >
          {heading}
        </h3>

        {/* Logos */}

        <ul
          className="
    mt-14

    grid
    grid-cols-2

    items-center
    justify-items-center

    gap-y-10

    md:grid-cols-4
    md:gap-x-12

    lg:gap-x-20
    xl:gap-x-24
  "
        >
          {logos.map((logo) => (
            <li
              key={logo.name}
              className="
    flex
    items-center
    justify-center
    gap-3

    text-[#9A9A9A]
  "
            >
              <img
                src={logo.image}
                alt={logo.name}
                loading="lazy"
                className="
      h-10
      w-auto
      object-contain
      opacity-70

      md:h-11
      lg:h-12
    "
              />

              <span
                className="
      whitespace-nowrap

      text-lg
      font-semibold

      tracking-tight

      text-[#9A9A9A]
    "
              >
                {logo.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
