import type { ProductBenefit } from "./types";

interface ProductBenefitCardProps {
  benefit: ProductBenefit;
}

export default function ProductBenefitCard({
  benefit,
}: ProductBenefitCardProps) {
  const Icon = benefit.icon;

  return (
    <article
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#113358]/10
        "
      >
        <Icon className="h-7 w-7 text-[#113358]" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-slate-900">
        {benefit.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">{benefit.description}</p>
    </article>
  );
}
