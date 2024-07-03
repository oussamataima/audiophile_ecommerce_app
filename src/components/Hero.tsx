import Image from "next/image";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section style={{ height: "calc(100vh - 90px)" }}>
      <Image
        className="relative -z-10  sm:hidden"
        src={"/home/mobile/image-header.jpg"}
        alt="hero image"
        fill
      />
      <Image
        className="relative -z-10 hidden sm:block "
        src={"/home/tablet/image-header.jpg"}
        alt="hero image"
        fill
      />
      <Image
        className="relative -z-10 hidden lg:block"
        src={"/home/desktop/image-header.jpg"}
        alt="hero image"
        fill
      />
      <div className="text-white flex flex-col items-center justify-center h-full px-6">
        <span className="text-sm text-white/50 uppercase tracking-[10px] text-center">New Product</span>
        <h1 className="text-4xl sm:text-[56px] sm:leading-[56px] font-bold uppercase max-w-[400px] text-center mt-3 sm mt-6" >XX99 Mark II Headphones</h1>
        <p className="text-[15px] text-center text-white/75 mt-6 mb-7 sm-mb-10 max-w-[350px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button>See Product</Button>
      </div>
    </section>
  );
}
