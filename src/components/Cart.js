import React, { useContext} from 'react'
import Food from './Food'
import { HotelContext } from '../context/hotel-context'
import{useNavigate} from "react-router-dom"
import { data } from '../data/data'
import { CartItem } from './CartItems'

const Cart = () => {
  const {cartItems,  getTotalCartAmount }=useContext(HotelContext);
  const totalAmount =getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div >
    <div className=" w-half h-half bg-white/10 fixed z-10 top-10 right-10 py-12 grid md:grid-cols-4 gap-6 text-white">
       <p className='font-bold text-2xl px-2 pt-4 just'>Items In the Cart</p> 
       <div className="cartItems">
        {data.map((item)=>{
       if(cartItems[item.id]!==0){
        return<CartItem data={item}/>
       }
        })}
        </div>
        
        { totalAmount > 0 ? (
        <div className="checkout">
          <div className="description"> <p><b>Subtotal Ksh:{totalAmount} </b></p></div>
        <button  onClick={()=>navigate("/")}>Continue Shopping</button>
        <button >checkout</button>
       </div>
       ) : (
        <h1>Your Cart Is Empty</h1>
       )}

</div>    
</div>
 ) 

}

export default Cart
