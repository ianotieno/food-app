import React, { useContext } from "react";
import { HotelContext } from '../context/hotel-context'

export const CartItem = (props) => {
  const { id, name, image,price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(HotelContext);

  return (
    <div>
    <div className=" ">
        <div className="relative">
      <p className='font-bold text-2xl px-2 pt-4'><span> {name}</span></p>
      <img className='w-[60%] h-[350px] object-cover rounded-t-lg  md:max-h-[250px] 'src={image} alt={name} style={{ height: 70, width: 60 }} />
      <p className='font-bold text-orange-600 text-2xl px-2 pt-4'><span> Ksh:{price}/=</span></p>
      <button className='border-orange-500 bg-white text-black mx-2  bottom-4' onClick={() => addToCart(id)}> + </button>
          
          <input
          className=" bg-gray-200 rounded-full border-orange-500'"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          /> 
           <button className='border-orange-500 bg-white text-black mx-2  bottom-4' onClick={() => removeFromCart(id)}> - </button>
        </div>
      </div>
    </div>
   
  );
};
