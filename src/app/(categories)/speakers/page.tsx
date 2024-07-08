import { getProductByCategory } from "@/actions/products";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";


export default async function page() {
 
    const products = await getProductByCategory("speakers")
    return (
        <>
            <section className="bg-black">
                <h1 className="text-white text-[28px] font-bold uppercase text-center tracking-[2px] py-8
                               md:text-[40px] md:line-height-[44px] md:py-24 ">Speakers</h1>
            </section>
         
            <section id="products" className="grid grid-cols-1  gap-16 xl:gap-32 my-16 xl:my-32">
                {products.map((product : Product) => (
                    <ProductCard key={product.id} {...product} />
                    
                ))}
            </section> 
        </>
    )
}