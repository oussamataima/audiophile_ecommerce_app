import React from "react";

export const Button = <
  P extends React.ButtonHTMLAttributes<HTMLButtonElement>
>({
  children,
  className,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "black" | "outline";
} & Omit<P, "ref">) => {
  const buttonClass =
    {
      primary: "bg-primary text-white",
      black: "bg-black text-white",
      outline: "bg-transparent text-black ring-black ring-1"
    }[variant] +
    " h-12 w-40 flex justify-center items-center font-bold text-[13px] uppercase " +
    className;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

