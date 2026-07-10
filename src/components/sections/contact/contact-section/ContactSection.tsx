import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import ContactFormCard from "./contact-form/ContactFormCard";
import OfficeMapCard from "./office-map/OfficeMapCard";

export default function ContactSection() {
  return (
    <Section className="bg-background">
      <Container size="xl">
        <div
          className="
            grid
            items-start

            gap-8

            lg:grid-cols-12

            xl:gap-10
          "
        >
          {/* ================= Left ================= */}

          <div className="lg:col-span-7">
            <ContactFormCard />
          </div>

          {/* ================= Right ================= */}

          <div className="lg:col-span-5">
            <OfficeMapCard />
          </div>
        </div>
      </Container>
    </Section>
  );
}
