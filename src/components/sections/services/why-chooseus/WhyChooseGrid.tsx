import { WHY_CHOOSE } from "./whyChoose.data";
import WhyChooseCard from "./WhyChooseCard";

export default function WhyChooseGrid() {
  return (
    <div
      className="
        grid
        items-stretch
        gap-6

        sm:grid-cols-2

        xl:grid-cols-4
      "
    >
      {WHY_CHOOSE.map((item) => (
        <WhyChooseCard key={item.id} item={item} />
      ))}
    </div>
  );
}
