"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { CartShoppingContext } from "@/context/cartProvider";
import { useContext, useEffect, useState } from "react";

type ProductCardProps = {
  id : number;
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
  slug: string;
  isNew?: boolean;
  isPurshasePage?: boolean;
};

import { formatter } from "@/utils/lib";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../shared/Button";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  description,
  price,
  isNew,
  isPurshasePage,
  slug,
  category,
}) => {
  const { addItem, items , increaseQuantity , decreaseQuantity } = useContext(CartShoppingContext);
  const item = items.find((i) => i.id === id);
  const [quantity, setQuantity] = useState(item ? item.quantity : 1);
  

  return (
    <article className="container flex flex-col xl:flex-row justify-between gap-8 md:gap-12 xl:gap-0">
      <div className="bg-[#f1f1f1] w-full xl:w-[540px] h-[327px]  md:h-[352px] xl:h-[560px] grid place-items-center rounded-lg relative">
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
        <Link href={`/${category}/${slug}`}>
          <h2
            className="text-[28px] sm:text-[40px] leading-snug font-bold uppercase tracking-[2px] text-center
    sm:max-w-[450px] sm:leading-[44px] xl:text-start "
          >
            {name}
          </h2>
        </Link>

        <p className="text-[15px] opacity-50 leading-[25px] text-center  sm:m-auto xl:text-start pt-4 pb-6">
          {description}
        </p>
        {!isPurshasePage && (
          <Button href={`/${category}/${slug}`} className="mx-auto xl:m-0">
            See Product
          </Button>
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
                  size={16}
                  strokeWidth={3}
                  onClick={() => item ? decreaseQuantity(id) : quantity > 1 && setQuantity(quantity - 1)}
                />
                <span className="text-[16px] font-bold  tracking-[1px]">
                  { item ? item.quantity : quantity}
                </span>
                <Plus
                  className="text-black/20 hover:cursor-pointer hover:text-primary duration-300"
                  size={16}
                  strokeWidth={3}
                  onClick={() => item ? increaseQuantity(id) : setQuantity(quantity + 1)}
                />
              </div>
              <Button disabled={items.some((item) => item.id === id)} onClick={() => addItem({ id, name, price , image , quantity })} className="mx-auto xl:m-0">add to cart</Button>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
