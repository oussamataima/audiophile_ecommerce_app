import { getProductBySlug } from "@/actions/products";
import ProductCard from "@/components/ProductCard";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product= await getProductBySlug(slug);
  return (
    <>
      <ProductCard {...product} />
    </>
  );
}
