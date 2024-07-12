"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { cn } from "@/utils/lib";
import Cart from "./Cart";
export default function Nav() {
  return (
    <nav className="bg-[#191919] h-[89px] sticky top-0 z-10">
      <div className="container h-full flex justify-between items-center gap-11 md:justify-normal">
        <HumburgerIcon className="lg:hidden" />
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="hidden lg:flex items-center gap-[34px] ml-auto ">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/headphones"}>Headphones</NavLink>
          <NavLink href={"/speakers"}>Speakers</NavLink>
          <NavLink href={"/earphones"}>Earphones</NavLink>
        </div>
        <div className="md:ml-auto">
          <Cart />
        </div>
      </div>
      <svg
        className="mx-auto w-full"
        width="1110"
        height="1"
        viewBox="0 0 1110 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect opacity="0.2" width="1110" height="1" fill="white" />
      </svg>
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "text-[13px] font-bold uppercase text-white hover:text-primary duration-300",
        pathname === props.href && "text-primary"
      )}
    />
  );
}

const HumburgerIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      className={className}
    >
      <rect width="16" height="3" fill="white" />
      <rect y="6" width="16" height="3" fill="white" />
      <rect y="12" width="16" height="3" fill="white" />
    </svg>
  );
};
