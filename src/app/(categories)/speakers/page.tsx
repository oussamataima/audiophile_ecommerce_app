import { getProductByCategory } from "@/actions/products";

import ProductsPage from "../-components/ProductsPage";


export default async function page() {
 
    const products = await getProductByCategory("speakers")
    return (
        <>
           <ProductsPage products={products} />

        </>
    )
}
