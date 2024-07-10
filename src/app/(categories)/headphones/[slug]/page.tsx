import { getProductBySlug } from "@/actions/products";
import ProductPage from "../../-components/ProductPage";
import RecommendedProducts from "../../-components/RecommendedProducts";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(slug);
  return (
    <>
      {product && <ProductPage product={product} />}
      
    </>
  );
}
