export default function HeroHeading() {
  return (
    <h1
      id="hero-heading"
      className="
        mt-8
        max-w-3xl
        text-4xl
        font-extrabold
        leading-[1.05]
        tracking-[-0.04em]
        text-[#1F1F1F]

        sm:text-5xl
        md:text-6xl
        lg:text-7xl
      "
    >
      Your
      <span className="text-[#4F46C8]"> Tech Partner </span>
      <span>{""}</span>
      in Digital World
    </h1>
  );
}
