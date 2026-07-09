import HeroActions from "./HeroAction";
import HeroBadge from "./HeroBadge";
import HeroDescription from "./HeroDescription";
import HeroHeading from "./HeroHeading";

const HeroContent = () => {
  return (
    <>
      <div
        className=" relative
        z-10
        mx-auto
        flex
        max-w-4xl
        flex-col
        items-center
        text-center"
      >
        <HeroBadge />

        <HeroHeading />

        <HeroDescription />

        <HeroActions />
      </div>
    </>
  );
};

export default HeroContent;
