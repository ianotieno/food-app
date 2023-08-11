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
 
    <div className=" w-half h-half bg-white fixed z-13 top-13 right-13 py-12 text-black">
       <p className='font-bold text-2xl px-2 pt-4 just'>Items In the Cart</p> 
       <div className="grid md:grid-cols-4 gap-6 ">
        {data.map((product)=>{
       if(cartItems[product.id]!==0){
        return<CartItem data={product}/>;
       }
        })}
        </div>
        
        {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
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
        <h1> Your Shopping Cart is Empty</h1>
        
      )}
    </div>

   

 ) 

}

export default Cart
