import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = ({ className }: { className?: string }) => {
  return (
    <section
      className={`container grid grid-cols-1  md:grid-cols-3 gap-[64px] md:gap-2.5 lg:gap-[30px] ${className}`}
    >
      <div
        id="cat1"
        className="bg-[#f1f1f1] rounded-lg h-[165px] lg:h-[204px] relative "
      >
        <div className="mx-auto flex flex-col gap-4 top-[88px] lg:top-[116px] relative  ">
          <h2 className="font-bold text-[15px] md:text-[18px] uppercase tracking-wide text-center">
            Headphones
          </h2>
          <Link
            className="flex gap-3 items-center mx-auto w-fit "
            href={"/headphones "}
          >
            <span className="text-[13px] font-bold uppercase text-black-500 hover:text-primary">
              Shop
            </span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
      <div
        id="cat2"
        className="bg-[#f1f1f1] rounded-lg h-[165px] lg:h-[204px] relative"
      >
        <div className="mx-auto flex flex-col gap-4 top-[88px] lg:top-[116px] relative ">
          <h2 className="font-bold text-[15px] md:text-[18px] uppercase tracking-wide text-center">
            Speakers
          </h2>
          <Link
            className="flex gap-3 items-center mx-auto w-fit "
            href={"/speakers"}
          >
            <span className="text-[13px] font-bold uppercase text-black-500 hover:text-primary">
              Shop
            </span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>

      <div
        id="cat3"
        className="bg-[#f1f1f1] rounded-lg h-[165px] lg:h-[204px] relative"
      >
        <div className="mx-auto flex flex-col gap-4 top-[88px] lg:top-[116px] relative ">
          <h2 className="font-bold text-[15px] md:text-[18px] uppercase tracking-wide text-center">
            Earphones
          </h2>
          <Link
            className="flex gap-3 items-center mx-auto w-fit "
            href={"/earphones"}
          >
            <span className="text-[13px] font-bold uppercase text-black-500 hover:text-primary">
              Shop
            </span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;

{
  /* function Category({
  imgPath,
  title,
  imgClasses,
}: {
  imgPath: string;
  title: string;
  imgClasses?: string;
}) {
  return (
    <div className="bg-[#f1f1f1] rounded-lg h-[165px] lg:h-[204px]  relative ">
        <Image
          className={`!relative mx-auto !top-auto ${imgClasses}`}
          src={imgPath}
          alt="category image"
          fill
        />
      <div className="mx-autoflex flex-col gap-4 ">
        <h2 className="font-bold text-[15px] md:text-[18px] uppercase tracking-wide text-center">
          {title}
        </h2>
        <div className="flex gap-3 items-center mx-auto w-fit ">
          <span className="text-[13px] font-bold uppercase text-black-500 hover:text-primary">
            Shop
          </span>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
} */
}

const ArrowRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
    >
      <path
        d="M1.32178 1L6.32178 6L1.32178 11"
        stroke="#D87D4A"
        strokeWidth={2}
      />
    </svg>
  );
};
