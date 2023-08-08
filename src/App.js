import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    
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
   
  );
}

export default App;
