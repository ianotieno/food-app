import React from 'react';
import { data } from '../data/data.js';

const SearchComponent = ({ searchQuery }) => {
  // If searchQuery is empty, do not display anything
  if (!searchQuery.trim()) {
    return null;
  }

  const filteredName =data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div >
     <div className=" w-half h-half bg-white/10 fixed z-10 top-10 right-20 py-12 grid md:grid-cols-4 gap-6 text-gray-500">
      {filteredName.length === 0 ? (
        <p className='font-bold text-2xl px-2 pt-4'><span>No matching products found</span></p> 
      ) : (
        filteredName.map((item,index) => (
          <div className='relative' key={index}>
               <p className='font-bold text-2xl px-2 pt-4'><span> { `${item.name}`}</span></p>
              <img className='max-h-[250px] md:max-h-[250px]  object-cover rounded-xl'src={item.image} alt={item.name} style={{ height: 70, width: 60 }} />
              <p className='font-bold text-orange-600 text-2xl px-2 pt-4'><span> { `${item.price}`}</span></p>
               
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default SearchComponent;
