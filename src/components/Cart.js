import React, { useContext} from 'react'
import { HotelContext } from '../context/hotel-context'
import{useNavigate} from "react-router-dom"
import { data } from '../data/data'
import { CartItem } from './CartItems'

const Cart = () => {
  const {cartItems,  getTotalCartAmount,checkout }=useContext(HotelContext);
  const totalAmount =getTotalCartAmount();
  const navigate = useNavigate();
  return (
 
    <div className=" w-full mx-auto bg-white fixed z-10 top-16  py-12 text-black">
       <p className='text-orange-600 font-bold text-4xl text-center'>Orders In the Cart</p> 
       <div className="grid md:grid-cols-4 gap-6 ">
        {data.map((product)=>{
       if(cartItems[product.id]!==0){
        return<CartItem data={product}/>;
       }
        })}
        </div>
        
        {totalAmount > 0 ? (
        <div className='max-w-[1640px] m-auto px-4 py-12 text-center'>
          <h1 className='text-orange-600 font-bold text-2xl'> Subtotal: Ksh:{totalAmount}/= </h1>
          <button className='border-orange-500 bg-white text-black mx-2  bottom-4' onClick={() => navigate("/")}> Continue Ordering </button>
          <button
          className='border-orange-500 bg-white text-black mx-2  bottom-4'
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
      <div className='text-center'>
        <h1> You havent yet ordered</h1>
        <button className='border-orange-500 bg-white text-black mx-2  bottom-4' onClick={() => navigate("/")}> Back to Order </button>
      </div>
      )}
    </div>

   

 ) 

}

export default Cart
