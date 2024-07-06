import Image from "next/image";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section className=" bg_hero flex justify-center xl:justify-start pt-[108px] md:pt-[128px] h-[600px] md:h-[729px] " >
      <div className="text-white h-fit flex flex-col gap-6 max-w-[327px] md:max-!w-[379px] xl:container">
        <div className="flex flex-col gap-4 md:gap-6">
        <span className="text-sm text-white/50 uppercase tracking-[10px] text-center xl:text-start leading-[19px]">New Product</span>
        <h1 className="text-4xl md:text-[56px] md:leading-[58px] font-bold uppercase max-w-[400px] text-center xl:text-start" >XX99 Mark II Headphones</h1>
        </div>
        <div className="flex flex-col gap-7 md:gap-10 items-center xl:items-start">
        <p className="text-[15px] leading-[25px] text-center xl:text-start text-white/75  max-w-[350px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button>See Product</Button>
        </div>
      </div>
    </section>
  );
}
