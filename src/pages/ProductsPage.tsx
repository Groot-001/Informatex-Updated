import CustomSolution from "@/components/sections/products/custom-solution";
import FeaturedProducts from "@/components/sections/products/Featured-Products";
import ProductHero from "@/components/sections/products/hero";
import WhyChooseProducts from "@/components/sections/products/why-choose-products";

const ProductsPage = () => {
  return (
    <>
      <ProductHero />
      <FeaturedProducts />
      <CustomSolution />
      <WhyChooseProducts />
    </>
  );
};

export default ProductsPage;
