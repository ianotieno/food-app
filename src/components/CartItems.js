import React, { useContext } from "react";
import { HotelContext } from '../context/hotel-context'

export const CartItem = (props) => {
  const { id, name, category, image,price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(HotelContext);

  return (
    <div className="cartItem md:grid-cols-4 gap-6 text-white">
      <img className='w-[60%] h-[350px] object-cover rounded-t-lg  md:max-h-[250px] 'src={image} alt={name} style={{ height: 70, width: 60 }} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
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
