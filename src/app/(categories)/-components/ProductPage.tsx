
import BackButton from "./BackButton";
import ProductInfo from "@/components/products/ProductInfo";
import ProductImages from "@/components/products/ProductImages";
import { Product } from "@/types";
import Categories from "@/components/shared/Categories";
import RecommendedProducts from "./RecommendedProducts";
import AboutUs from "@/components/shared/AboutUs";
import ProductCard from "@/components/products/ProductCard";

const ProductPage = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="container my-6">
        <BackButton />
      </div>
      {product && <ProductCard {...product} isPurshasePage />}
      {product && <ProductInfo className="mt-10" {...product} />}
      {product && (
        <ProductImages
          className="my-10 xl:my-[120px]"
          gallery={product.gallery}
        />
      )}
      {product?.others && <RecommendedProducts product={product} />}
      <Categories className="mb-20 mt-32  xl:mb-24 xl:mt-40 " />
      <AboutUs className="my-20 sm:my-24 " />
    </>
  );
};

export default ProductPage;
