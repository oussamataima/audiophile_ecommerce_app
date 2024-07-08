import AboutUs from "@/components/AboutUs";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

const ProductsPage = ({ products }: { products: Product[] }) => {
  return (
    <>
      <section className="bg-black">
        <h1
          className="text-white text-[28px] font-bold uppercase text-center tracking-[2px] py-8
                               md:text-[40px] md:line-height-[44px] md:py-24 "
        >
          earphones
        </h1>
      </section>

      <section
        id="products"
        className="grid grid-cols-1  gap-16 xl:gap-32 my-20 sm:my-24"
      >
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
      <AboutUs className="my-20 sm:my-24 " />
    </>
  );
};

export default ProductsPage;


