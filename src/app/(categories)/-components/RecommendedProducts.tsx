/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/shared/Button"
import { Product } from "@/types"

const RecommendedProducts = ({ product }: { product: Product}) => {
  return (
    <section className="container my-14 xl:my-[120px]">
      <h3 className="text-2xl uppercase font-bold md:text-[32px] md:leading-[36px] leading-9 text-center mb-10  ">You may also like</h3>
      <div className=" grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-3 lg:gap-[30px]">
        {product?.others &&
          product?.others.map((product: any) => (
            <article className="flex flex-col gap-8" key={product.id}>
              <div className="bg-[#f1f1f1] rounded-lg min-h-[120px] md:min-h-[318px] flex items-center justify-center">
                <img className="md:hidden" src={product.image.mobile} alt={product.name}/>
                <img className="hidden md:block" src={product.image.tablet} alt={product.name}/>
              </div>
              <div className="flex flex-col gap-8 justify-center items-center">
                <h4 className="text-2xl font-bold tracking-wider">{product.name}</h4>
                <Button href={`/${product.category}/${product.slug}`} variant="primary" >See Product</Button>
              </div>
            </article>
          ))}
      </div>
    </section>

  )
}

export default RecommendedProducts


