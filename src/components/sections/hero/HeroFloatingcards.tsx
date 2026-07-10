import ProfileCard from "./ProfileCard";
import StatCard from "./StatCards";

const floatingCards = [
  {
    id: "countries",
    position: "left-8 top-28 xl:left-16 2xl:left-24",
    component: <StatCard value="20+" title="Countries Served" icon="globe" />,
  },
  {
    id: "projects",
    position: "right-8 top-32 xl:right-16 2xl:right-24",
    component: <StatCard value="100+" title="Projects Delivered" />,
  },
  {
    id: "experience",
    position: "left-4 top-[58%] xl:left-12 2xl:left-20",
    component: (
      <ProfileCard
        value="7+"
        title="Years of Experience"
        image="/images/team/member-1.jpg"
      />
    ),
  },
  {
    id: "engineers",
    position: "right-4 top-[58%] xl:right-12 2xl:right-20",
    component: (
      <ProfileCard
        value="100+"
        title="IT Engineers"
        image="/images/team/member-2.jpg"
      />
    ),
  },
];

export default function HeroFloatingCards() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {floatingCards.map(({ id, position, component }) => (
        <div
          key={id}
          className={`pointer-events-auto absolute z-20 ${position}`}
        >
          {component}
        </div>
      ))}
    </div>
  );
}
