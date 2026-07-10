import ContactHero from "@/components/sections/contact/hero/ContactHero";
import ContactInfoSection from "@/components/sections/contact/contact-card/ContactInfoSection";
import ContactFormCard from "@/components/sections/contact/contact-section/contact-form/ContactFormCard";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactHero />

      <ContactInfoSection />

      <ContactFormCard />
    </main>
  );
}
