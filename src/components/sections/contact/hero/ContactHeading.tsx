import { typography } from "@/design-system/typography";

export default function ContactHeading() {
  return (
    <h1 className={`${typography.hero.title} mt-8`}>
      Contact
      <br />
      <span className="text-primary">Our Experts</span>
    </h1>
  );
}
