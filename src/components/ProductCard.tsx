import Image from "next/image"

const ProductCard = ({image, title, description} : {image: string, title: string, description: string}) => {
  return (
    <article className="xl:h-[580px]">
        <div className="xl:w-[540px]">
            <Image src={image} alt="product image" fill />
        </div>
        <div >
        <span className="text-sm text-white/50 uppercase tracking-[10px] text-center xl:text-start leading-[19px]">New Product</span>
            <h2 className="text-[28px] sm:text-[40px] leading-snug font-bold uppercase tracking-[2px] text-center
    sm:max-w-[450px] sm:leading-[44px] mx-auto xl:text-start">{title}</h2>
        </div>
        <p className="text-[15px] leading-[25px] text-center  sm:m-auto xl:text-start">
            {description}
        </p>
    </article>
  )
}

export default ProductCard