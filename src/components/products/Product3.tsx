import Image from "next/image";
import React from "react";
import { Button } from "../shared/Button";

const Product3 = ({ className }: { className?: string }) => {
  return (
    <section
      className={`flex flex-col gap-6 sm:flex-row sm:gap-3 lg:gap-0 lg:justify-between relative sm:max-h-80 ${className}`}
    >
      <Image
        className="!relative !h-auto rounded-lg sm:hidden"
        fill
        src="/home/mobile/image-earphones-yx1.jpg"
        alt=""
        sizes="300"

      />
      <Image
        className="!relative !h-auto rounded-lg hidden sm:block lg:hidden"
        fill
        src="/home/tablet/image-earphones-yx1.jpg"
        alt=""
        sizes="300"

      />
      <Image
        className="!relative !h-auto rounded-lg hidden lg:block lg:!w-[540px]"
        fill
        src="/home/desktop/yx1.png"
        alt=""
        sizes="300"
        
      />
      <div className="bg-[#f1f1f1]  rounded-lg py-10 pl-[26px] sm:py-[100px] lg:w-[540px] sm:pl-10 lg:pl-24 w-full">
        <h3 className="text-[28px] font-bold uppercase tracking-[2px] mb-8">
          YX1 Earphones
        </h3>
        <Button href="/speakers/yx1-earphones" variant="outline">See Product</Button>
      </div>
    </section>
  );
};

export default Product3;
