import ContactHero from "@/components/sections/contact/hero/ContactHero";
import ContactInfoSection from "@/components/sections/contact/contact-card/ContactInfoSection";
import ContactSection from "@/components/sections/contact/contact-section/ContactSection";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactHero />

      <ContactInfoSection />

      <ContactSection />
    </main>
  );
}
