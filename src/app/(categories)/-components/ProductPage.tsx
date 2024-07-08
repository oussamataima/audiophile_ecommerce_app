import ProductCard from "@/components/ProductCard"
import BackButton from "./BackButton"
import ProductInfo from "@/components/ProductInfo"
import ProductImages from "@/components/ProductImages"
import { Product } from "@/types"


const ProductPage = ({ product }: { product: Product}) => {
  return (
    <>
    <div className="container my-6">
      <BackButton />

    </div>
      {product && <ProductCard {...product} isPurshasePage />}
      {product && <ProductInfo className="mt-10" {...product} />}
      {product && (
        <ProductImages className="my-[120px]" gallery={product.gallery} />
      )}
    </>
  )
}

export default ProductPage