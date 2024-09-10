import { useState } from "react";
import { Button } from "../shared/Button";

const CancelOrder = () => {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {open && (
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
              <circle cx="32" cy="32" r="32" fill="#E53E3E" />
              <path d="M20 20L44 44" stroke="white" stroke-width="4" />
              <path d="M44 20L20 44" stroke="white" stroke-width="4" />
            </svg>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold uppercase leading-7 md:leading-9 tracking-wide break-words md:text-[32px]">
                your order has been cancelled
              </h3>
              <p className=" text-[15px]  leading-[25px] break-words">
                Please try again later
              </p>
            </div>
            <div onClick={() => setOpen(false)}>
              <Button className="w-full mt-2 uppercase">Back TO Home</Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CancelOrder;
