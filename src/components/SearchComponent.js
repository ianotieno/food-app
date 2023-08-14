import React,{useContext} from 'react';
import { data } from '../data/data.js';
import { HotelContext } from '../context/hotel-context'

const SearchComponent = ({ searchQuery }) => {
  const { addToCart }=useContext(HotelContext);
  if (!searchQuery.trim()) {
    return null;
  }

  const filteredName =data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div >
     <div className=" w-full mx-auto bg-white fixed z-10 top-16 right-0 py-12 text-black  py-12 grid md:grid-cols-4 gap-6 text-center items-center">
      {filteredName.length === 0 ? (
        <p className='font-bold text-2xl px-2 pt-4 text-center '><span>Not Availabe In The Menu</span></p> 
      ) : (
        filteredName.map((item,index) => (
          <div className='relative text-center' key={index}>
              <p className='font-bold text-2xl px-2 pt-4'><span> { `${item.name}`}</span></p>
              <img className='w-[80%] h-[350px] object-cover rounded left-10 md:max-h-[250px] 'src={item.image} alt={item.name} />
              <p className='font-bold text-orange-600 text-2xl px-2 pt-4'><span> Ksh: { `${item.price}`}/=</span></p>
              <button className='border-orange-500 bg-white text-black mx-2  bottom-4' onClick={()=>addToCart(item.id)}>Order Now</button>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default SearchComponent;
