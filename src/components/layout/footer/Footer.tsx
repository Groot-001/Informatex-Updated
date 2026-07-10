import Container from "@/components/common/Container";

import { socialLinks, servicesColumn, contactItems } from "./Data";
import FooterBrand from "./Footerbrand";
import FooterContactColumn from "./Footercontactcolumn";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterNewsletter from "./Footernewsletter";
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
        border-soft

        bg-soft
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-0

          h-[26rem]
          w-[40rem]

          -translate-x-1/2

          rounded-full

          bg-secondary/5

          blur-[180px]
        "
      />

      {/* CTA */}

      <div className="relative z-10 pt-16">
        <FooterCTA />
      </div>

      {/* Main Footer */}

      <Container
        size="xl"
        className="
          relative
          z-10

          mt-16

          grid
          gap-12

          sm:grid-cols-2

          lg:grid-cols-4
        "
      >
        <FooterBrand socials={socialLinks} />

        <FooterLinkColumn {...servicesColumn} />

        <FooterContactColumn items={contactItems} />

        <FooterNewsletter />
      </Container>

      {/* Bottom */}

      <Container
        size="xl"
        className="
          relative
          z-10

          mt-16

          border-t
          border-soft

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

            md:flex-row
          "
        >
          <p
            className="
              text-sm

              text-muted
            "
          >
            © {year} {companyName}. All rights reserved.
          </p>

          <p
            className="
              text-sm

              text-muted
            "
          >
            Crafted with ❤️ by Informatex Tech
          </p>
        </div>
      </Container>
    </footer>
  );
}
