import AboutUs from "@/components/AboutUs";
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
      <AboutUs className="my-20 sm:my-24 " />
    </>
  );
}