import React from "react";
interface ProductInfoProps {
  className?: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
}

const ProductInfo = ({className , features, includes}: ProductInfoProps) => {
  return (
    <section className={`container flex flex-col gap-8 xl:flex-row xl:justify-between ${className}`}>
      <div className="flex flex-col gap-8 xl:max-w-[635px]">
        <h3 className="text-2xl uppercase font-bold tracking-wide xl:text-4xl leading-9">Features</h3>
        <p className="opacity-50 text-[15px] line-height-[25px]">
          {features.split('\n').map((line : string, index : number) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="flex flex-col gap-8 xl:min-w-[350px]">
        <h3 className="text-2xl uppercase font-bold xl:text-4xl leading-9">In the box</h3>
        <ul className="flex flex-col gap-2">
          {includes.map((item: { quantity: number; item: string }, index: number) => (
            <li className=" text-[15px] line-height-[25px] flex gap-6 items-center" key={index}>
              <span className="font-bold text-primary">{item.quantity}x</span> <p className="opacity-50">{item.item}</p>
            </li>
          ))}
       
        </ul>
      </div>
    </section>
  );
};

export default ProductInfo;
