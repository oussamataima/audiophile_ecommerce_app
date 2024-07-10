// import React from "react"

import { Button } from "./Button"

const Product2 = ({className } : {className? : string }) => {
  return (
    <section className={`container ${className}`}>
    <div
         className="bg_new_product rounded-lg py-24 pl-5 sm:pl-12 xl:pl-24 "

    >
        <h3 className="text-[28px] font-bold uppercase tracking-[2px] mb-8">ZX7 Speaker</h3>
        <Button href="/speakers/zx7-speaker" variant="outline" >See Product</Button>
    </div>

    </section>
  )
}

export default Product2