import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewProduct from "@/components/NewProduct";
import Product2 from "@/components/Product2";
import Product3 from "@/components/Product3";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories className="mb-24 md:mb-24 md:mt-[58px] xl:mt-[110px] xl:mb-[168px]" />

      <NewProduct className="container" />
      <Product2 className="container mt-6 sm:mt-8 xl:mt-12" />
      <Product3 className="container mt-6 sm:mt-8 xl:mt-12" />
      <AboutUs />
    </>
  );
}

// About us section
const AboutUs = () => (
  <section className="container my-20 sm:my-24 flex flex-col gap-10 sm:gap-16 xl:gap-0 xl:flex-row-reverse xl:justify-between ">
    <Image
      src="/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
      alt="about us image"
      fill
      className="!relative mx-auto rounded-lg sm:hidden"
    />
    <Image
      src="/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"
      alt="about us image"
      fill
      className="!relative mx-auto rounded-xl hidden sm:block xl:hidden"
    />
    {/* <Image
      src="/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
      alt="about us image"
      fill
      className="!relative !w-[540px] rounded-xl hidden  xl:block"
    /> */}
    <div
      style={{
        background:
          "url('/home/Bitmap.png') lightgray 0px 0px / 100% 100% no-repeat",
      }}
      className="rounded-lg xl:w-[540px] xl:h-[588px] "
    ></div>
    <div className="flex flex-col gap-8 xl:self-center xl:w-[445px] ">
      <h2
        className="text-[28px] sm:text-[40px] leading-snug font-bold uppercase tracking-[2px] text-center
    sm:max-w-[573px] sm:leading-[44px] mx-auto xl:text-start"
      >
        Bringing you the <span className="text-primary">best</span> audio gear
      </h2>
      <p className="text-[15px] leading-[25px] text-center  sm:m-auto xl:text-start">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  </section>
);
