import Image from "next/image";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section style={{ height: "calc(100vh - 90px)" }}>
      <Image
        className="relative -z-10"
        src={"/home/mobile/image-header.jpg"}
        alt="hero image"
        fill
      />
      <div className="text-white flex flex-col items-center justify-center h-full px-6">
        <span className="text-sm text-white/50 uppercase tracking-[10px] text-center">New Product</span>
        <h1 className="text-4xl font-bold text-center mt-3" >XX99 Mark II HeadphoneS</h1>
        <p className="text-[15px] text-center text-white/75 mt-6 mb-7">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button>See Product</Button>
      </div>
    </section>
  );
}
