
import { data } from '../data/data'
import React, { createContext, useState } from 'react'
export const HotelContext = createContext(null);


 const getDefaultCart=()=>{
    let cart={}
    for(let i=1; i<data.length +1; i++){
        cart[i]=0
    }
 return cart;
 }

const HotelContextProvider = (props) => {
    const[cartItems,setCartItems]=useState(getDefaultCart());
    const getTotalCartAmount=()=>{
      let totalAmount=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfor =data.find((product)=>product.id===Number(item));
          totalAmount+=cartItems[item]* itemInfor.price
        }
         }
         return totalAmount;
    };
    const addToCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    };
    
    const removeFromCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    };
    
    
     const updateCartItemCount=(newAmout,itemId)=>{
      setCartItems((prev)=>({...prev,[itemId] : newAmout}));
     };
    const contextValue={ cartItems , addToCart , removeFromCart, updateCartItemCount ,getTotalCartAmount }
      return ( <HotelContext.Provider value={contextValue}>{props.children} </HotelContext.Provider>)
      
    
  }
  
export default HotelContextProvider
