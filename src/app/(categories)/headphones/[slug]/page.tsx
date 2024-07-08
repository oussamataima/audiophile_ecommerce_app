import { getProductBySlug } from "@/actions/products";
import ProductCard from "@/components/ProductCard";
import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product= await getProductBySlug(slug);
  return (
    <>
      {product && <ProductCard {...product} isPurshasePage />}
      {product && <ProductInfo className="mt-10" {...product}/>}
      {product && <ProductImages gallery={product.gallery}/>}
    </>
  );
}
