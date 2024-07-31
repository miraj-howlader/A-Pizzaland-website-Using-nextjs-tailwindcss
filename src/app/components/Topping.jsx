
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
const Topping = ({additionalTopping,setAdditionalTopping,topping}) => {
  
  const [isChecked,setIsChecked] = useState(false)
  const handleChecked = ()=> {
    setIsChecked(!isChecked)
  }

  const handelTopping = ()=> {
    if(isChecked){
      const newTopping = new Set([...additionalTopping, {...topping}])
      setAdditionalTopping(Array.from(newTopping))
    }else{
      const newToppings = additionalTopping.filter((toppingOb)=>{
        return toppingOb.name !== topping.name
      });
      setAdditionalTopping(newToppings)
    }
  }

  useEffect(()=>{
    handelTopping();
  }, [isChecked])


  return <div className={`${isChecked && 'border-orange'} w-full
   max-w-[110px] h-[140px] p-1 flex flex-col items-center
    justify-center border rounded-md bg-white relative `}>
     <Image src={topping.image} width={70} height={70} alt=""
     className=" mb-2"/>

     {/* topping name  */}
     <div className=" text-sm capitalize text-center font-medium">
      {topping.name}
     </div>

     <input
     className=" absolute w-full h-full opacity-0 cursor-pointer"
      type="checkbox" checked={isChecked} 
      onChange={handleChecked}/>

     {/* checkbox icon  */}
     <div className={`${isChecked? 'opacity-100':"opacity-0"} absolute
      top-2 right-1`}>
      <IoCheckmark  className=" text-xl text-orange" />
     </div>
  </div>;
};

export default Topping;
