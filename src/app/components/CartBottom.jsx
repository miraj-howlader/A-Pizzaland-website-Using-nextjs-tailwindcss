import { useContext, useState } from "react";

import { IoClose } from "react-icons/io5";
import CheckoutDetails from "./CheckoutDetails";
import Modal from 'react-modal'
import { CartContext } from "../context/CartContext";

const modalStyle = {
  overlay: {
    backgroundColor:'rgba(0,0,0,0.5)'
  }
}

Modal.setAppElement('body')


const CartBottom = () => {
  const  {setIsOpen,cart,cartTotal} =useContext(CartContext)
  const [modal,setModal] = useState(false);

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }


  return <div>
    {cart.length >= 1 ? <div className=" px-6 py-3 lg:py-6 mt-auto">
      <div className=" flex items-center justify-between mb-6
       text-lg font-semibold font-robotoCondensed">
        <div>Total:</div>
        <div>${parseFloat(cartTotal).toFixed(2)}</div>
      </div>
      {/* btn  */}
      <div className=" flex flex-col gap-y-3">
        <button
        onClick={()=>{setIsOpen(false),openModal(true)}}
         className=" btn btn-lg gradient font-semibold flex
         justify-center">Checkout</button>
      </div>
    </div>:<div className=" absolute top-0 w-full h-full flex
     justify-center items-center -z-10">
      <div className=" font-semibold">Your cart is empty</div>
      </div>}

      {/* checkoutmodal  */}
      {modal && <Modal
      className=' bg-white w-full h-full lg:max-w-[900px]
       lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%]
         lg:left-[50%]lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none'
       isOpen={modal} style={modalStyle}
      onRequestClose={closeModal} contentLabel="Checkout Modal">

        <div
        onClick={closeModal}
         className=" absolute z-30 right-2 top-2 hover:scale-110
         duration-200 cursor-pointer">
          <IoClose  className=" text-4xl text-orange"/>
        </div>
        <CheckoutDetails setModal={setModal}/>
        </Modal>}
  </div>;
};

export default CartBottom;
