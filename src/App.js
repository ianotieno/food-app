import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './components/Cart';
import HotelContextProvider from './context/hotel-context';
function App() {
  return (
    <div>
       
    
    <HotelContextProvider>
    <Router>
       <Navbar/> 
       <Hero/>
       <HeadlineCards/>
       <Food/>
       <Category/>
       <Routes>
       <Route path= "/cart" element={<Cart />} />
       </Routes>
    </Router>
    </HotelContextProvider>
    </div>
  );
}

export default App;
