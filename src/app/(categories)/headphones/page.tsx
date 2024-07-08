import { getProductByCategory } from "@/actions/products";

import ProductsPage from "../-components/ProductsPage";

export default async function page() {
  const products = await getProductByCategory("headphones");
  return (
    <>
    <ProductsPage products={products} />
    </>
  );
}
