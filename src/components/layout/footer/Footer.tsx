import FooterCTA from "./ Footercta";
import { socialLinks, servicesColumn, contactItems } from "./Data";
import FooterContactColumn from "./Footercontactcolumn";
import FooterNewsletter from "./Footernewsletter";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterBrand from "./Footerbrand";

interface FooterProps {
  companyName?: string;
}

export default function Footer({
  companyName = "Informatex Tech",
}: FooterProps) {
  const year = new Date().getFullYear();

  console.log("Value of it is : ", servicesColumn);
  return (
    <footer className="w-full bg-white pb-10 pt-16">
      <FooterCTA />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <FooterBrand socials={socialLinks} />
        <FooterLinkColumn {...servicesColumn} />
        <FooterContactColumn items={contactItems} />
        <FooterNewsletter />
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-slate-100 px-6 pt-6 text-center">
        <p className="text-sm text-slate-400">
          © {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
