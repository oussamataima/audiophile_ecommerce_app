// import React from "react"

import { Button } from "./Button"

const Product2 = ({className } : {className? : string }) => {
  return (
    <div style={{ background: "url(/home/mobile/image-speaker-zx7.jpg) lightgray 0px 0px / 100% 100% no-repeat;" }}
         className={`py-24 pl-5 ${className}`}

    >
        <h3 className="text-[28px] font-bold uppercase tracking-[2px] mb-8">ZSX Speaker</h3>
        <Button variant="black" className="bg-transparent text-black ring-black ring-1">See Product</Button>
    </div>
  )
}

export default Product2