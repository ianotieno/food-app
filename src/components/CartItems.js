import React, { useContext } from "react";
import { HotelContext } from '../context/hotel-context'

export const CartItem = (props) => {
  const { id, name, category, image,price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(HotelContext);

  return (
    <div>
    <div className=" ">
        <div className="relative">
      <img className='w-[60%] h-[350px] object-cover rounded-t-lg  md:max-h-[250px] 'src={image} alt={name} style={{ height: 70, width: 60 }} />
      <p className='font-bold text-2xl px-2 pt-4'><span> {name}</span></p>
      <p className='font-bold text-orange-600 text-2xl px-2 pt-4'><span> {price}</span></p>
       
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
   
  );
};
