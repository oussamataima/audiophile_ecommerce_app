import { cn } from "@/utils/lib";
import Image from "next/image";

const AboutUs = ({className}: {className?: string}) => (
    <section className={cn("container flex flex-col gap-10 sm:gap-16 xl:gap-0 xl:flex-row-reverse xl:justify-between ", className)}>
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

export default AboutUs;