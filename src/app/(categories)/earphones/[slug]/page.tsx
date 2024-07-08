import { getProductBySlug } from "@/actions/products";
import ProductCard from "@/components/ProductCard";
import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";
import BackButton from "../../-components/BackButton";
import ProductPage from "../../-components/ProductPage";

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
