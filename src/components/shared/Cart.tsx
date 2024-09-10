"use client";
import { cn, formatter } from "@/utils/lib";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { CartShoppingContext } from "@/context/cartProvider";
import { useContext } from "react";
import { CartItem } from "@/types";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Checkout } from "@/actions/stripe";
import ConfirmOrder from "../products/ConfirmOrder";
import { useSearchParams } from 'next/navigation'
import CancelOrder from "../products/CancelOrder";


const Cart = () => {
  
  const [showCart, setShowCart] = useState(false);
  const searchParams = useSearchParams()
  const success = searchParams.get('success')
  const canceled = searchParams.get('canceled')

  useEffect(() => {
    if (showCart) {
      document.body.setAttribute("data-modal-open", "true");
    } else {
      document.body.removeAttribute("data-modal-open");
    }
  }, [showCart]);
  return (
    <>
    {canceled === "true" && <CancelOrder />}
    {success === "true" && <ConfirmOrder />}
      <button
        id="cart_icon"
        className="relative"
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        {showCart && <Overlay onClick={() => setShowCart(!showCart)} />}
        <PanierIcon />
      </button>
      <AnimatePresence>{showCart && <CartContent />}</AnimatePresence>
    </>
  );
};

export default Cart;



const CartContent = () => {
  const { items, emptyCart, totalPrice } = useContext(CartShoppingContext);
  

  return (
    <motion.div  
      id="cart"
      className="bg-white p-8 px-7 md:p-8 rounded-lg  absolute right-10 top-[114px] min-w-[327px] md:min-w-[377px] z-50 max-h-[500px]"
      initial={{  opacity:0 }}
      animate={{   opacity:1 }}
      transition={{duration:0.3,}}
  
      exit={{ opacity:0.5 }}
    >
      <div  className="flex justify-between items-center">
        <h4 className="text-lg font-bold uppercase tracking-wider">
          Cart {items.length}
        </h4>
        <button
          onClick={() => emptyCart()}
          className="underline text-[15px] line-height-[25px] opacity-50 hover:text-primary hover:cursor-pointer "
        >
          Remove all
        </button>
      </div>
      <div className="flex flex-col gap-6 my-8">
        {items.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex flex-col gap-6 mt-8">
        <Total total={totalPrice} />
        <Button onClick={() => Checkout(items)} className="w-full" >{"Checkout"}</Button>
      </div>
    </motion.div>
  );
};

const ProductItem = ({ id, name, price, image, quantity }: CartItem) => {
  const { increaseQuantity, decreaseQuantity } =
    useContext(CartShoppingContext);

  return (
    <article className="flex gap-4">
      <figure className="w-16 h-16 bg-zinc-100 rounded-lg flex justify-center items-center relative">
        <Image
          sizes="40"
          className="!relative !w-[50%] !h-auto"
          src={image}
          alt={name}
          fill
        />
      </figure>
      <div className="flex flex-col justify-center">
        <h5 className="text-[15px] font-bold  leading-[25px]">
          {name.split(" ").slice(0, 2).join(" ")}
        </h5>
        <p className="opacity-50  text-sm font-bold  leading-[25px]">
          $ {formatter(price)}
        </p>
      </div>
      <div className="flex justify-around items-center ml-auto bg-[#f1f1f1] w-24 h-8 self-center">
        <button
          onClick={() => decreaseQuantity(id)}
          className="text-black/20 hover:cursor-pointer hover:text-primary duration-300"
        >
          <Minus size={10} strokeWidth={3} />
        </button>
        <span className="text-[13px] font-bold  tracking-[1px]">
          {quantity}
        </span>
        <button
          onClick={() => increaseQuantity(id)}
          className="text-black/20 hover:cursor-pointer hover:text-primary duration-300"
        >
          <Plus size={10} strokeWidth={3} />
        </button>
      </div>
    </article>
  );
};

const PanierIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.41142 13.1946H7.41037C7.03959 13.1955 6.73829 13.491 6.73829 13.8542C6.73829 14.2179 7.04064 14.5139 7.41212 14.5139H19.6309C20.0031 14.5139 20.3047 14.8092 20.3047 15.1736C20.3047 15.538 20.0031 15.8333 19.6309 15.8333H18.4821H8.625H7.41212C6.2975 15.8333 5.39063 14.9455 5.39063 13.8542C5.39063 13.0421 5.89302 12.343 6.60914 12.0382L4.17634 1.31944H0.673829C0.301644 1.31944 0 1.02412 0 0.659722C0 0.295329 0.301644 0 0.673829 0H4.7168C5.03266 0 5.30605 0.214753 5.37467 0.516611L5.85635 2.63889H22.3262C22.5377 2.63889 22.7368 2.73613 22.8642 2.9014C22.9914 3.06668 23.0322 3.28074 22.9741 3.47986L20.2788 12.716C20.1961 12.9991 19.9317 13.1944 19.6309 13.1944H7.41405L7.41142 13.1946ZM8.625 15.8333C9.75732 15.8333 10.6786 16.7679 10.6786 17.9167C10.6786 19.0654 9.75732 20 8.625 20C7.49268 20 6.57143 19.0654 6.57143 17.9167C6.57143 16.7679 7.49268 15.8333 8.625 15.8333ZM18.4821 15.8333C19.6145 15.8333 20.5357 16.7679 20.5357 17.9167C20.5357 19.0654 19.6145 20 18.4821 20C17.3498 20 16.4286 19.0654 16.4286 17.9167C16.4286 16.7679 17.3498 15.8333 18.4821 15.8333ZM19.1225 11.875L21.4329 3.95833H6.15571L7.95259 11.875H19.1225ZM9.30952 17.9167C9.30952 17.5338 9.00238 17.2222 8.625 17.2222C8.24762 17.2222 7.94048 17.5338 7.94048 17.9167C7.94048 18.2995 8.24762 18.6111 8.625 18.6111C9.00238 18.6111 9.30952 18.2995 9.30952 17.9167ZM18.4821 17.2222C18.8595 17.2222 19.1667 17.5338 19.1667 17.9167C19.1667 18.2995 18.8595 18.6111 18.4821 18.6111C18.1048 18.6111 17.7976 18.2995 17.7976 17.9167C17.7976 17.5338 18.1048 17.2222 18.4821 17.2222Z"
        fill="white"
      />
    </svg>
  );
};

const Total = ({ className, total }: { className?: string; total: number }) => {
  return (
    <div className={cn("flex justify-between items-center", className)}>
      <div className=" opacity-50 text-[15px] font-normal leading-[25px]">
        TOTAL
      </div>
      <div className="  text-center text-lg font-bold uppercase">
        $ {formatter(total)}
      </div>
    </div>
  );
};

const Overlay = ({ onClick }: any) => {
  return (
    <div
      id="overlay"
      className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"
      onClick={onClick}
    ></div>
  );
};
