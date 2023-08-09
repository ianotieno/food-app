import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';
import HotelContextProvider from './context/hotel-context';
function App() {
  return (
    <HotelContextProvider>
      <BrowserRouter>
       <Navbar/> 
       <Hero/>
       <HeadlineCards/>
       <Food/>
       <Category/>
       <div>
       <Routes>
       <Route path= "/cart" element={<Cart />} />
       </Routes>
       </div>
       </BrowserRouter>
       </HotelContextProvider>
  );
}

export default App;
