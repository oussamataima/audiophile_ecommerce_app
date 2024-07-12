import { cn } from "@/utils/lib";
import Image from "next/image";

type ProductImagesProps = {
  gallery: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  className?: string;
};

const ProductImages = ({ gallery, className }: ProductImagesProps) => {
  return (
    <section className={cn("container relative", className)}>
      <Image
        className="!relative md:hidden"
        sizes="500"
        fill
        priority
        src={gallery.mobile}
        alt="product gallery"
      />
      <Image
        className="!relative hidden md:block xl:hidden"
        sizes="500"
        fill
        priority
        src={gallery.tablet}
        alt="product gallery"
      />
      <Image
        className="!relative hidden xl:block"
        sizes="500"
        fill
        priority
        src={gallery.desktop}
        alt="product gallery"
      />
    </section>
  );
};

export default ProductImages;
