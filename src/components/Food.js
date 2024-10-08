import React, { useState, useContext } from 'react'
import {category, data} from '../data/data.js'
import { HotelContext } from '../context/hotel-context'
const Food = (props) => {
    const[foods, setFoods]=useState(data);
    const { cartItems, addToCart }=useContext(HotelContext);
    const cartItemCount = cartItems[data.id];
    const filterType=(category)=>{
      setFoods(
        data.filter((item)=>{
          return item.category===category
        })
      )
    }
    const filterPrice=(price)=>{
      setFoods(
        data.filter((item)=>{
          return item.price===price
        })
      )
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      <div className='flex flex-col lg:flex-row justify-between'>
    <div>
    <p className='font-bold text-gray-700'>Filter Type</p>
        <div className='flex justfiy-between flex-wrap'>
            <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
            <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
            <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
            <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
        </div>
       </div> 
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-ful'>
            <button onClick={()=>filterPrice('100')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >Ksh:100</button>
            <button onClick={()=>filterPrice('200')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Ksh:200</button>
            <button onClick={()=>filterPrice('300')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Ksh:300</button>
            <button onClick={()=>filterPrice('400')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Ksh:400</button>
          </div>
        </div>
      </div>
      
      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {foods.map((item, index) => (
           
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            
            <img src={item.image} alt={item.name}
            className='w-full h-[200px] object-cover rounded-t-lg'
            
            />
             <div className='flex justify-between px-3 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p><span className='bg-orange-500 text-white p-1 rounded-full'>Ksh:{item.price}/=</span></p>
              <button  className='border-orange-500 bg-white text-black mx-2  bottom-4' onClick={()=>addToCart(item.id)}>Order Now {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
            </div>
          </div> 
        ))}
      </div>
    </div>
  )
}

export default Food
