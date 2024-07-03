import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewProduct from "@/components/NewProduct";
import Product2 from "@/components/Product2";
import Product3 from "@/components/Product3";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 sm:px-10 max-w-[1110px] mx-auto">
      <Hero />
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-[68px] sm:gap-3 lg:gap-[30px] my-20">
        <Category imgPath="/home/headphones_category.png" title="Headphones"/>
        <Category imgPath="/home/speakers_category.png" title="Speakers"/>
        <Category imgPath="/home/earphones_category.png" title="Earphones"/>
      </section>
      <NewProduct />
      <Product2 className="mt-6" />
      <Product3 className="mt-6"/>
      <AboutUs />
    </main>
  );
}


// About us section
const AboutUs = () => (
  <section className="my-20">
      <Image
        src="/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
        alt="about us image"
        width={327}
        height={300}
        className="mx-auto rounded-md"
      />

    <h2 className="text-[28px] sm:text-[40px] leading-snug font-bold uppercase tracking-[2px] mb-8 mt-10 text-center
    sm:max-w-[573px] mx-auto">
        Bringing you the best audio gear
    </h2>
    <p className="text-[15px] leading-6 text-center ">
      Located at the heart of New York City, Audiophile is the premier store for
      high end headphones, earphones, speakers, and audio accessories. We have a
      large showroom and luxury demonstration rooms available for you to browse
      and experience a wide range of our products. Stop by our store to meet some
      of the fantastic people who make Audiophile the best place to buy your
      portable audio equipment.
    </p>
  </section>
);
