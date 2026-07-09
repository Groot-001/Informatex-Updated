import image1 from "@/assets/company logo1 (1)/blue peak digital.png";
import image2 from "@/assets/company logo1 (1)/horizon.png";
import image3 from "@/assets/company logo1 (1)/sunrise.png";
import image4 from "@/assets/company logo1 (1)/wander way.png";

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
  heading = "Trusted by businesses that choose innovation",
  logos = DEFAULT_LOGOS,
  className = "",
}: TrustedBySectionProps) {
  return (
    <section
      className={`
        w-full
        py-14
        lg:py-20
        ${className}
      `}
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* Heading */}

        <p
          className="
            text-center
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#6B7280]

            sm:text-sm
          "
        >
          {heading}
        </p>

        {/* Logos */}

        <ul
          className="
    mt-10
    grid
    grid-cols-2
    gap-4

    sm:grid-cols-2
    sm:gap-6

    md:grid-cols-4

    lg:gap-8
  "
        >
          {logos.map((logo) => (
            <li key={logo.name}>
              <div
                className="
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-[#E8E7F3]
          bg-[#F7F5FF]
          px-5
          py-4
          transition-all
          duration-300
          ease-out

          hover:-translate-y-1
          hover:border-[#D9D2F9]
          hover:bg-white
          hover:shadow-[0_12px_32px_rgba(79,70,200,0.08)]
        "
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  loading="lazy"
                  className="
            h-10
            w-10
            rounded-lg
            object-contain
            bg-white
            p-1
          "
                />

                <span
                  className="
            text-sm
            font-semibold
            text-[#374151]

            sm:text-base
          "
                >
                  {logo.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
