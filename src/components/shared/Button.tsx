import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "outline" | "black";
};

export const Button = <
  P extends React.ButtonHTMLAttributes<HTMLButtonElement>
>({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonProps & Omit<P, "ref">) => {
  const buttonClass =
    {
      primary: "bg-primary text-white hover:bg-secondary",
      outline: "bg-transparent text-black ring-black ring-1 hover:bg-black hover:text-white",
      black: "bg-black text-white hover:bg-transparent ring-black ring-1 hover:text-black",
    }[variant] +
    " h-12 w-40 flex justify-center items-center font-bold text-[13px] tracking-[1px] hover:transition-all uppercase ease-in duration-300 " +
    className;

  if (href) {
    return (
      <Link className={buttonClass} href={href}>
          {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

