import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { typography } from "@/design-system/typography";

import ContactCard from "./ContactCard";
import { contactCards } from "./Contact.data";

import SectionEyebrow from "../../ourpurpose/SectionEyeBrow";

export default function ContactInfoSection() {
  return (
    <Section
      className="
        bg-soft
      "
    >
      <Container size="xl">
        {/* ================= Heading ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow align="center">Get In Touch</SectionEyebrow>

          <h2 className={`${typography.section.title} mt-5`}>
            We're Always Here
            <span className="block text-secondary">To Help You</span>
          </h2>

          <p className={`${typography.section.description} mt-6`}>
            Whether you have a question, need technical support, or want to
            discuss your next project, our team is ready to connect with you.
          </p>
        </div>

        {/* ================= Contact Cards ================= */}

        <div
          className="
            mt-16

            grid
            gap-7

            md:grid-cols-2

            xl:grid-cols-4
          "
        >
          {contactCards.map((card) => (
            <ContactCard key={card.title} card={card} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
