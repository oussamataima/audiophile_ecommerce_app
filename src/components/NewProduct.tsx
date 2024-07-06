"use client"

import Image from "next/image";
import { Button } from "./Button";

const NewProduct = ({className } : {className? : string }) => {
  return (
    <section className={`container   text-white ${className}`}>
      <div className="bg-primary xl:h-[560px] relative rounded-lg">
      <div className="pb-8 pt-14 relative xl:hidden" >
      <Image
        src="/home/mobile/image-speaker-zx9.png"
        alt="new product"
        className="mx-auto md:hidden"
        width={172}
        height={207}
      />
      <Image
        src="/home/tablet/image-speaker-zx9.png"
        alt="new product"
        className="mx-auto hidden md:block lg:hidden"

        width={197}
        height={237}
      />
      <Image
        src="/home/desktop/image-speaker-zx9.png"
        alt="new product"
        className="mx-auto hidden lg:block"

        width={410}
        height={493}
      />

      </div>
      <div className="hidden xl:block  w-[410px] h-[493px] bg-[url('/home/desktop/image-speaker-zx9.png')] bg-no-repeat absolute left-[118px] -bottom-[29px]" >

      </div>
      <div className="flex flex-col gap-6 pb-14 xl:w-fit xl:max-w-[349px] xl:absolute xl:right-24 xl:bottom-[124px] xl:p-0">
        <h2 className="text-4xl md:text-[56px] leading-[58px] font-bold max-w-min  mx-auto text-center uppercase xl:text-start xl:m-0 ">ZSX Speaker</h2>
        <p className="text-[15px] text-white/75 text-center leading-6 mx-auto max-w-[280px] md:max-w-[350px] xl:text-start xl:m-0">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button className="w-fit mx-auto xl:m-0 xl:mt-2 " variant="black" onClick={() => {console.log("clicked")}} >See Product</Button>
      </div>


      </div>
     
      
    </section>
  );
};

export default NewProduct;



