import ContactBadge from "./ContactBadge";
import ContactDescription from "./ContactDescription";
import ContactHeading from "./ContactHeading";
import ContactIllustration from "./ContactIllustration";

export default function ContactHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9FC]
        py-16
        lg:py-20
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -top-32
            right-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#2374B6]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#093254]/5
            blur-3xl
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          px-6

          lg:grid-cols-12
          lg:gap-8
          lg:px-8
        "
      >
        {/* Left */}

        <div className="lg:col-span-5">
          <ContactBadge />

          <ContactHeading />

          <ContactDescription />
        </div>

        {/* Right */}

        <div className="lg:col-span-7">
          <ContactIllustration />
        </div>
      </div>
    </section>
  );
}
