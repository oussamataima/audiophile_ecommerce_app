// import React from "react"

import { Button } from "./Button"

const Product2 = ({className } : {className? : string }) => {
  return (
    <div
         className={`bg_new_product py-24 pl-5 sm:pl-12 ${className}`}

    >
        <h3 className="text-[28px] font-bold uppercase tracking-[2px] mb-8">ZSX Speaker</h3>
        <Button variant="outline" >See Product</Button>
    </div>
  )
}

export default Product2