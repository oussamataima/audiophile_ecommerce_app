import Image from "next/image";
import React from "react";
import { Button } from "./Button";

const Product3 = ({ className }: { className?: string }) => {
  return (
    <section
      className={`flex flex-col gap-6 sm:flex-row sm:gap-3 lg:gap-8 sm:max-h-80 ${className}`}
    >
      <Image
        className="!relative !h-auto rounded-6 sm:hidden"
        fill
        src="/home/mobile/image-earphones-yx1.jpg"
        alt=""
      />
      <Image
        className="!relative !h-auto rounded-6 lg:hidden"
        fill
        src="/home/tablet/image-earphones-yx1.jpg"
        alt=""
      />
      <Image
        className="!relative !h-auto rounded-6 hidden lg:block"
        fill
        src="/home/desktop/image-earphones-yx1.jpg"
        alt=""
      />
      <div className="bg-[#f1f1f1] rounded-md py-10 pl-[26px] sm:py-[100px] sm:pl-10 lg:pl-24 w-full">
        <h3 className="text-[28px] font-bold uppercase tracking-[2px] mb-8">
          YX1 Earphones
        </h3>
        <Button variant="outline">See Product</Button>
      </div>
    </section>
  );
};

export default Product3;
