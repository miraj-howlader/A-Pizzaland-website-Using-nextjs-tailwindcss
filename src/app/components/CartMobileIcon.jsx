'use client'
import { useContext } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const CartMobileIcon = () => {
  const {isOpen,setIsOpen,itemAmount} = useContext(CartContext)


  return <div
  onClick={()=>setIsOpen(!isOpen)}
   div className=" bg-tertiary w-[72px] h-[72px]
   rounded-full flex justify-center items-center text-white
    fixed cursor-pointer right-[10%] bottom-[5%] z-20 lg:hidden">
      <BsHandbagFill  className=" text-4xl"/>
      {/* amount  */}
      <span className=" absolute text-white bottom-3 right-4
       gradient w-5 h-5 flex justify-center items-center
        rounded-full font-robotoCondensed">{itemAmount}</span>
    </div>
};

export default CartMobileIcon;
