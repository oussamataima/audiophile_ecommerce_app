import { getProductByCategory } from "@/actions/products";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import ProductsPage from "../-components/ProductsPage";


export default async function page() {
 
    const products = await getProductByCategory("speakers")
    return (
        <>
           <ProductsPage products={products} />
        </>
    )
}