import React from "react";

interface LogoItem {
  name: string;
  icon: React.ReactNode;
}

interface TrustedBySectionProps {
  heading?: string;
  logos?: LogoItem[];
  className?: string;
}

const IconDrop = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M12 2.5c3.2 3.6 6 7.2 6 10.6a6 6 0 1 1-12 0c0-3.4 2.8-7 6-10.6Z"
      fill="currentColor"
    />
  </svg>
);

const IconSwirl = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M4 15c0 3 2.5 5.5 5.5 5.5S15 18 15 15s-2.5-5.5-5.5-5.5S4 6 9.5 6c4 0 7 2 8.5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="18.5" cy="11" r="1.4" fill="currentColor" />
  </svg>
);

const IconBurst = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <line
        key={deg}
        x1="12"
        y1="12"
        x2="12"
        y2="4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        transform={`rotate(${deg} 12 12)`}
      />
    ))}
  </svg>
);

const IconOrbit = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M12 4a8 8 0 1 0 6.9 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="18.5" cy="6.5" r="1.6" fill="currentColor" />
  </svg>
);

const defaultLogos: LogoItem[] = [
  { name: "Horizon", icon: <IconDrop /> },
  { name: "Blue Peak Digital", icon: <IconSwirl /> },
  { name: "Wander Way Travels", icon: <IconBurst /> },
  { name: "Sunrise Tours", icon: <IconOrbit /> },
];

export default function TrustedBySection({
  heading = "Trusted by leading companies worldwide",
  logos = defaultLogos,
  className = "",
}: TrustedBySectionProps) {
  return (
    <section className={`w-full bg-white py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-medium text-gray-500">{heading}</p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
          {logos.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2 text-gray-400 transition-colors duration-200 hover:text-gray-600"
            >
              {logo.icon}
              <span className="text-xl font-semibold italic tracking-tight">
                {logo.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
