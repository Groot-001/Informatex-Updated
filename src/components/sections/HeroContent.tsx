import HeroActions from "./HeroAction";
import HeroBadge from "./HeroBadge";
import HeroDescription from "./HeroDescription";
import HeroHeading from "./HeroHeading";

const HeroContent = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <HeroBadge />

        <HeroHeading />

        <HeroDescription />

        <HeroActions />
      </div>
    </>
  );
};

export default HeroContent;
