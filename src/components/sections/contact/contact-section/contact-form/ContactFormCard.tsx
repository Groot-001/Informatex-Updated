import { typography } from "@/design-system/typography";
import ContactForm from "./ContactForm";

export default function ContactFormCard() {
  return (
    <div
      className="
        rounded-[32px]

        border
        border-soft

        bg-surface

        p-8

        shadow-brand

        lg:p-10
      "
    >
      <h2 className="text-3xl font-bold text-brand">Send Us a Message</h2>

      <p className={`${typography.section.description} mt-4`}>
        Fill out the form and our team will get back to you shortly.
      </p>

      <ContactForm />
    </div>
  );
}
