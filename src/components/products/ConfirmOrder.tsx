"use client";
import { CartShoppingContext } from "@/context/cartProvider";
import { formatter } from "@/utils/lib";
import Image from "next/image";
import { useContext, useState } from "react";
import { Button } from "../shared/Button";

const ConfirmOrder = () => {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const { items, totalPrice } = useContext(CartShoppingContext);
  console.log(items);
  const firstItem = items[0];

  if (!open) return null;

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        id="overlay"
        className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10"
      ></div>
      <div className="w-[327px] md:w-[540px] bg-white rounded-lg p-8 md:p-12 flex flex-col gap-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="32" fill="#D87D4A" />
          <path
            d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        
        
        
        <div className="space-y-4">
            
          <h3 className="text-2xl font-bold uppercase leading-7 md:leading-9 tracking-wide break-words md:text-[32px]">
            THANK YOU <br /> FOR YOUR ORDER
          </h3>
          <p className="opacity-50 text-[15px]  leading-[25px] break-words">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="bg-[#f0f0f0] rounded-lg">
          {showAll ? (
            items.map((item) => (
              <div className="flex gap-4 px-6 pt-6 pb-3 " key={item.id}>
                <div className="size-[50px] flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt="product image"
                    width={28}
                    height={32}
                  />
                </div>
                <div className="flex flex-col ">
                  <span className="text-[15px] font-bold leading-[25px]">
                    {item.name}
                  </span>
                  <span className="opacity-50 font-bold text-[15px] leading-[25px]">
                    ${formatter(item.price)}
                  </span>
                </div>
                <div className="opacity-50 font-bold leading-[25px] ml-auto">
                  {formatter(item.quantity)}
                </div>
              </div>
            ))
          ) : (
            <div className="flex gap-4 px-6 pt-6 pb-3 ">
              <div className="size-[50px] flex justify-center items-center">
                <Image
                  src={firstItem.image}
                  alt="product image"
                  width={28}
                  height={32}
                />
              </div>
              <div className="flex flex-col ">
                <span className="text-[15px] font-bold leading-[25px]">
                  {firstItem.name}
                </span>
                <span className="opacity-50 font-bold text-[15px] leading-[25px]">
                  ${formatter(firstItem.price)}
                </span>
              </div>
              <div className="opacity-50 font-bold leading-[25px] ml-auto">
                {formatter(firstItem.quantity)}
              </div>
            </div>
          )}

          <hr className="mx-6 bg-black/10" />
          {!showAll && (
            <p
              onClick={() => setShowAll(true)}
              className="text-xs font-bold opacity-50 text-center pt-3 pb-6"
            >
              {items.length > 1 ? `and ${items.length - 1} other item(s)` : ""}
            </p>
          )}

          <div className="bg-black rounded-bl-lg rounded-br-lg flex flex-col gap-2 px-6 pt-4 pb-5">
            <span className="text-[15px] text-white opacity-50 leading-[25px]">
              GRAND TOTAL
            </span>
            <span className="text-white text-lg font-bold leading-[25px]">
              ${formatter(totalPrice)}
            </span>
          </div>
          <div onClick={() => setOpen(false)}>
            <Button className="w-full mt-6 uppercase">Back TO Home</Button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
