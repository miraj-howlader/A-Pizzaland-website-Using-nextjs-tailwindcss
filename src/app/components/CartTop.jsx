import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const CartTop = () => {
  const {setIsOpen} = useContext(CartContext)
  return <div className=" w-full h-20 border-b flex items-center
   justify-center px-10">
    <div className=" font-semibold">Shopping Bag(3)</div>
    <div onClick={()=>setIsOpen(false)} className=" ml-2 cursor-pointer">
    <IoClose  className=" text-3xl group-hover: scale-110
      transition-all duration-300" />
    </div>
  </div>;
};

export default CartTop;
