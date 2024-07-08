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
    <section className={"container"}>
        <Image className="!relative md:hidden" fill src={gallery.mobile} alt="" />
        <Image className="!relative hidden md:block xl:hidden" fill src={gallery.tablet} alt="" />
        <Image className="!relative hidden xl:block" fill src={gallery.desktop} alt="" />
    </section>
  )
}

export default ProductImages