import React,{useContext} from 'react';
import { data } from '../data/data.js';
import { HotelContext } from '../context/hotel-context'

const SearchComponent = ({ searchQuery }) => {
  const {cartItems, addToCart , removeFromCart, updateCartItemCount}=useContext(HotelContext);
  if (!searchQuery.trim()) {
    return null;
  }

  const filteredName =data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div >
     <div className=" w-half h-half bg-white/10 fixed z-10 top-10 right-20 py-12 grid md:grid-cols-4 gap-6 text-white">
      {filteredName.length === 0 ? (
        <p className='font-bold text-2xl px-2 pt-4'><span>No matching products found</span></p> 
      ) : (
        filteredName.map((item,index) => (
          <div className='relative' key={index}>
               <p className='font-bold text-2xl px-2 pt-4'><span> { `${item.name}`}</span></p>
              <img className='w-[60%] h-[350px] object-cover rounded-t-lg  md:max-h-[250px] 'src={item.image} alt={item.name} style={{ height: 70, width: 60 }} />
              <p className='font-bold text-orange-600 text-2xl px-2 pt-4'><span> { `${item.price}`}</span></p>
              <button className='border-orange-500 bg-white text-black mx-2  bottom-4' onClick={()=>addToCart(item.id)}>Order Now</button>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default SearchComponent;
