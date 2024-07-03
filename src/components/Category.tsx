/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
function Category({imgPath , title}: {imgPath: string , title:string}) {
  return (
    <div className="bg-[#f1f1f1] rounded-lg grid place-content-center">

      <div className="relative bottom-2/4">
        <img
          className=""
          src={imgPath}
          alt="category image"
        />
      </div>
      <h2 className="font-bold text-[15px] -mt-6  text-center">{title}</h2>
      <div className="flex gap-3 items-center mx-auto mb-5 mt-2">
        <span className="text-[13px] font-bold uppercase text-black/50">Shop</span>
        <ArrowRightIcon />
      </div>
    </div>
  );
}

export default Category;

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
        stroke-width="2"
      />
    </svg>
  );
};
