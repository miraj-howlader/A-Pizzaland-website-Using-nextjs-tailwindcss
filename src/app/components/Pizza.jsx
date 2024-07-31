'use client'
import Image from "next/image";
import Modal from 'react-modal'

import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import PizzaDetails from "./PizzaDetails";

Modal.setAppElement('body')

const modalStyle = ()=> {
  overlay:{
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
}
const Pizza = ({pizza}) => {

  const [modal,setModal] = useState(false)
 

   const openModal = () => {
    setModal(true)
   }

   const closeModal = () => {
    setModal(false)
   }


  return <div className=" group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
    <Image src={pizza.image}
    onClick={openModal}
    className="lg:group-hover:translate-y-3 transition-all
      duration-300 mb-8 cursor-pointer"
    width={250}
    height={250}
    alt=""
    priority={1}
    />
    {/* tittle  */}
    <div onClick={openModal}>
      <div className=" text-xl font-bold mb-3
       capitalize cursor-pointer">{pizza.name}</div>
    </div>
    {/* description  */}
    <div className="text-sm font-medium min-h-[60px]
     mb-6 ">{pizza.description}</div>

     {/* price and btn  */}
     <div className="mb-6 flex items-center justify-between">
      <div className=" hidden lg:flex text-xl font-semibold">starts at {pizza.priceSm}</div>
     
     {/* btn  */}
     <button onClick={openModal} className=" hidden lg:flex gradient text-white
      rounded-lg btn-sm font-semibold text-sm">Choose</button>

      <button onClick={openModal} className=" btn btn-sm gradient text-sm
       lg:hidden px-3">starts at {pizza.priceSm}</button>
     </div>

     {/* modal  */}
     {modal && <Modal
      isOpen={modal}
       style={modalStyle}
     onRequestClose={closeModal}
     contentLabel="Pizza Modal"
     className=' bg-pink-200 w-full h-full lg:max-w-[800px]
      lg:max-h-[500px] lg:rounded-[30px] lg:fixed
        lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%]
         lg:translate-y-[-50%] outline-none'
     >
      <div className=" absolute z-30 right-2 top-2
       hover:scale-110 duration-200 cursor-pointer">
        <IoMdClose onClick={closeModal} className=' text-4xl text-orange'/>
      </div>
      {/* pizza details  */}
      <PizzaDetails pizza={pizza} modal={modal} setModal={setModal}/>
      </Modal>}
  </div>;
};

export default Pizza;
