import ProfileCard from "./ProfileCard";
import StatCard from "./StatCards";

export default function HeroFloatingCards() {
  return (
    <>
      {/* Top Left */}
      <div className="absolute left-[14%] top-[8%]">
        <StatCard value="20+" title="Countries Served" icon="globe" />
      </div>

      {/* Top Right */}
      <div className="absolute right-[15%] top-[10%]">
        <StatCard value="500+" title="Projects Delivered" />
      </div>

      {/* Bottom Left */}
      <div className="absolute left-[8%] top-[58%]">
        <ProfileCard
          value="10+"
          title="Years of Experience"
          image="/images/team/member-1.jpg"
        />
      </div>

      {/* Bottom Right */}
      <div className="absolute right-[10%] top-[55%]">
        <ProfileCard
          value="100+"
          title="IT Engineers"
          image="/images/team/member-2.jpg"
        />
      </div>
    </>
  );
}
