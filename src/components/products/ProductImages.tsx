import { cn } from "@/utils/lib";
import Image from "next/image"

type ProductImagesProps = {
  gallery: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  className?: string;
};

const ProductImages = ({gallery, className}: ProductImagesProps) => {
  return (
    <section className={cn("container relative", className)}>
        <Image priority className="!relative md:hidden" sizes="500" fill src={gallery.mobile} alt="" />
        <Image priority className="!relative hidden md:block xl:hidden" sizes="500" fill src={gallery.tablet} alt="" />
        <Image priority className="!relative hidden xl:block" sizes="500" fill src={gallery.desktop} alt="" />
    </section>
  )
}

export default ProductImages