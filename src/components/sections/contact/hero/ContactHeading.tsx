import { typography } from "@/design-system/typography";

export default function ContactHeading() {
  return (
    <h1 className={`${typography.hero.title} mt-8`}>
      Let's Build Your
      <br />
      <span className="text-primary">Next Big Solution</span>
    </h1>
  );
}
