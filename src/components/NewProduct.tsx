"use client"

import Image from "next/image";
import { Button } from "./Button";

const NewProduct = ({className } : {className? : string }) => {
  return (
    <section className={`bg-primary text-white ${className}`}>
      <div className="pb-8 pt-14 relative">
      <Image
        src="/home/mobile/image-speaker-zx9.png"
        alt="new product"
        className="mx-auto"
        width={172}
        height={207}
      />

      </div>
      <div className="flex flex-col gap-8 pb-14">
        <h2 className="text-4xl sm:text-[58px] leading-[56px] font-bold max-w-min  mx-auto text-center uppercase ">ZSX Speaker</h2>
        <p className="text-[15px] text-white/75 text-center leading-6 mx-auto sm:max-w-[350px] ">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button className="mx-auto" variant="black" onClick={() => {console.log("clicked")}} >See Product</Button>
      </div>

      
    </section>
  );
};

export default NewProduct;



