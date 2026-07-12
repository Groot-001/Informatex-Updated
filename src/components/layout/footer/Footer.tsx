import Container from "@/components/common/Container";

import { socialLinks, servicesColumn, contactItems } from "./Data";
import FooterBrand from "./Footerbrand";
import FooterContactColumn from "./Footercontactcolumn";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterNewsletter from "./Footernewsletter";
import SectionBackground from "@/components/sections/products/SectionBackground";
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
        relative
        overflow-hidden

        border-t
        border-[#E7EEF6]

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]
      "
    >
      <SectionBackground />

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10

          pt-20
        "
      >
        <FooterCTA />
      </div>

      {/* ================================================= */}
      {/* Main Footer */}
      {/* ================================================= */}

      <Container
        size="xl"
        className="
          relative
          z-10

          mt-24

          grid
          gap-14

          sm:grid-cols-2

          lg:grid-cols-4
        "
      >
        <FooterBrand socials={socialLinks} />

        <FooterLinkColumn {...servicesColumn} />

        <FooterContactColumn items={contactItems} />

        <FooterNewsletter />
      </Container>

      {/* ================================================= */}
      {/* Bottom */}
      {/* ================================================= */}

      <Container
        size="xl"
        className="
          relative
          z-10

          mt-20

          border-t
          border-[#E7EEF6]

          py-8
        "
      >
        <div
          className="
            flex
            flex-col

            items-center
            justify-between

            gap-4

            text-center

            md:flex-row
            md:text-left
          "
        >
          <p
            className="
              text-sm

              text-slate-500
            "
          >
            © {year} {companyName}. All rights reserved.
          </p>

          <p
            className="
              text-sm

              text-slate-500
            "
          >
            Designed & Developed by{" "}
            <span className="font-semibold text-[#113358]">
              Informatex Tech
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
