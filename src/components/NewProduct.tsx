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
      <Circle size={279}  className="absolute top-[7%] left-[7%] opacity-25" />
      <Circle size={320}  className="absolute top-0 opacity-25" />

      </div>
      <div className="flex flex-col gap-8 pb-14">
        <h2 className="text-4xl font-bold max-w-min  mx-auto text-center uppercase ">ZSX Speaker</h2>
        <p className="text-[15px] uppercase text-white/75 text-center leading-6">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button className="mx-auto" variant="black" onClick={() => {console.log("clicked")}} >See Product</Button>
      </div>

      
    </section>
  );
};

export default NewProduct;



const Circle = ({ size, borderColor = '#fff', className, ...props }: { size: number, borderColor?: string, className?: string }) => {
  return (
    <div className={`bg-transparent  border-[1px] rounded-full  ${className}`}
    style={{ width: size+"px", height: size+"px" , borderColor: borderColor}}
      {...props}
    >
    </div>
  )
}

