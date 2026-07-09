import { socialLinks, servicesColumn, contactItems } from "./Data";
import FooterContactColumn from "./Footercontactcolumn";
import FooterNewsletter from "./Footernewsletter";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterBrand from "./Footerbrand";
import FooterCTA from "./ Footercta";

interface FooterProps {
  companyName?: string;
}

export default function Footer({
  companyName = "Informatex Tech",
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        w-full
        border-t
        border-[#E6EDF5]
        bg-[#F7FAFD]
        pt-16
        pb-8
      "
    >
      {/* CTA */}

      <FooterCTA />

      {/* Main Footer */}

      <div
        className="
          mx-auto
          mt-16
          grid
          max-w-7xl
          grid-cols-1
          gap-12
          px-6

          sm:grid-cols-2

          lg:grid-cols-4
          lg:px-8
        "
      >
        <FooterBrand socials={socialLinks} />

        <FooterLinkColumn {...servicesColumn} />

        <FooterContactColumn items={contactItems} />

        <FooterNewsletter />
      </div>

      {/* Bottom */}

      <div
        className="
          mx-auto
          mt-14
          max-w-7xl
          border-t
          border-[#E6EDF5]
          px-6
          pt-6

          lg:px-8
        "
      >
        <p
          className="
            text-center
            text-sm
            text-[#617186]
          "
        >
          © {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
