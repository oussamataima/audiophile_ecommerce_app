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
  variant?: "primary" |  "outline" | "black";
} & Omit<P, "ref">) => {
  const buttonClass =
    {
      primary: "bg-primary text-white hover:bg-secondary",
      outline: "bg-transparent text-black ring-black ring-1 hover:bg-black hover:text-white ",
      black: "bg-black text-white hover:bg-transparent ring-black ring-1 hover:text-black",
    }[variant] +
    " h-12 w-40 flex justify-center items-center font-bold text-[13px] hover:transition-all uppercase ease-in duration-300" +
    className;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

