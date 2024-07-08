/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

type ProductCardProps = {
  image?: string;
  name: string;
  price: number;
  description: string;
  category: string;
  slug: string;
  isNew?: boolean;
  isPurshasePage?: boolean;
};

import { Button } from "./Button";
import { formatter } from "@/utils/lib";
import {  Minus, Plus } from "lucide-react";
import Link from "next/link";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  isNew,
  isPurshasePage,
  slug,
  category
}) => {
  return (
    <article className="container flex flex-col xl:flex-row justify-between gap-8 md:gap-12 xl:gap-0">
      <div className="bg-[#f1f1f1] w-full xl:w-[540px] h-[327px]  md:h-[352px] xl:h-[560px] grid place-items-center rounded-lg ">
        <img
          className="max-w-48 xl:max-w-[400px]"
          src={image}
          alt="product image"
        />
      </div>
      <div className="max-w-[445px] self-center flex flex-col gap-4 ">
        {isNew && (
          <span className="text-sm text-primary uppercase tracking-[10px] text-center xl:text-start leading-[19px]">
            New Product
          </span>
        )}
        <h2
          className="text-[28px] sm:text-[40px] leading-snug font-bold uppercase tracking-[2px] text-center
    sm:max-w-[450px] sm:leading-[44px] xl:text-start "
        >
          {name}
        </h2>
        <p className="text-[15px] leading-[25px] text-center  sm:m-auto xl:text-start pt-4 pb-6">
          {description}
        </p>
        {!isPurshasePage && (
          <Link href={`/${category}/${slug}`}>
          <Button className="mx-auto xl:m-0">See Product</Button>
          </Link>
        )}
        {isPurshasePage && (
          <>
            <span className="font-bold text-lg uppercase tracking-[1.286px]">
              $ {formatter(price)}
            </span>
            <div className="flex gap-4 xl:mt-8">
              <div className="bg-[#f1f1f1] w-[120px] h-12 flex justify-around items-center">
                <Minus
                  className="text-black/20 hover:cursor-pointer hover:text-primary duration-300"
                  size={18}
                  strokeWidth={3}
                />
                <span className="text-[16px] font-bold  tracking-[1px]">
                  10
                </span>
                <Plus
                  className="text-black/20 hover:cursor-pointer hover:text-primary duration-300"
                  size={18}
                  strokeWidth={3}
                />
              </div>
              <Button className="mx-auto xl:m-0">add to cart</Button>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
