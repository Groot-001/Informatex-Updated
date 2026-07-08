import { PRODUCT_BENEFITS } from "./constants";
import ProductBenefitCard from "./ProductBenefitCard";

export default function WhyChooseProducts() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#113358]">
            WHY INFORMATEX
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Built for Modern Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every product is designed with scalability, security, and long-term
            business growth in mind.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCT_BENEFITS.map((benefit) => (
            <ProductBenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
