import ProfileCard from "./ProfileCard";
import StatCard from "./StatCards";

export default function HeroFloatingCards() {
  return (
    <div className="hidden lg:block">
      {/* Top Left */}
      <div
        className="
          absolute
          left-[10%]
          top-28
          z-20
        "
      >
        <StatCard value="20+" title="Countries Served" icon="globe" />
      </div>

      {/* Top Right */}
      <div
        className="
          absolute
          right-[10%]
          top-32
          z-20
        "
      >
        <StatCard value="100+" title="Projects Delivered" />
      </div>

      {/* Bottom Left */}
      <div
        className="
          absolute
          left-[6%]
          top-[60%]
          z-20
        "
      >
        <ProfileCard
          value="7+"
          title="Years of Experience"
          image="/images/team/member-1.jpg"
        />
      </div>

      {/* Bottom Right */}
      <div
        className="
          absolute
          right-[8%]
          top-[58%]
          z-20
        "
      >
        <ProfileCard
          value="100+"
          title="IT Engineers"
          image="/images/team/member-2.jpg"
        />
      </div>
    </div>
  );
}
