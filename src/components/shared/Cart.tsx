import { Minus, Plus } from "lucide-react"

const Cart = () => {
  return (
    <section className="p-8 rounded-lg">
        <header>
            <h4 className="text-lg font-bold uppercase tracking-wider">Cart (3)</h4>
            <button className="text-primary hover:cursor-pointer hover:underline text-[15px] line-height-[25px]">Remove all</button>
        </header>
        <div className="flex flex-col gap-6 my-8">
        <article className="flex gap-4">
            <figure className="size-16"></figure>
            <div>
                <h5>XX99 MK II</h5>
                <p>$2,999</p>
            </div>
            <div className="flex justify-around items-center ml-auto">
                <button className="text-black/20 hover:cursor-pointer hover:text-primary duration-300">
                  <Minus size={16} strokeWidth={3} />
                </button>
                <span className="text-[13px] font-bold  tracking-[1px]">
                  10
                </span>
                <button className="text-black/20 hover:cursor-pointer hover:text-primary duration-300">
                  <Plus size={16} strokeWidth={3} />
                </button>
              </div>
        </article>
        <article className="flex gap-4">
            <figure className="size-16"></figure>
            <div>
                <h5>XX99 MK II</h5>
                <p>$2,999</p>
            </div>
            <div className="flex justify-around items-center ml-auto">
                <button className="text-black/20 hover:cursor-pointer hover:text-primary duration-300">
                  <Minus size={16} strokeWidth={3} />
                </button>
                <span className="text-[13px] font-bold  tracking-[1px]">
                  10
                </span>
                <button className="text-black/20 hover:cursor-pointer hover:text-primary duration-300">
                  <Plus size={16} strokeWidth={3} />
                </button>
              </div>
        </article>
        <article className="flex gap-4">
            <figure className="size-16"></figure>
            <div>
                <h5>XX99 MK II</h5>
                <p>$2,999</p>
            </div>
            <div className="flex justify-around items-center ml-auto">
                <button className="text-black/20 hover:cursor-pointer hover:text-primary duration-300">
                  <Minus size={16} strokeWidth={3} />
                </button>
                <span className="text-[13px] font-bold  tracking-[1px]">
                  10
                </span>
                <button className="text-black/20 hover:cursor-pointer hover:text-primary duration-300">
                  <Plus size={16} strokeWidth={3} />
                </button>
              </div>
        </article>
        </div>
     
    </section>
  )
}

export default Cart