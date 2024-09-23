import React, { useState, useContext } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import SearchComponent from './SearchComponent';
import { Link } from 'react-router-dom';
import { HotelContext } from '../context/hotel-context';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useContext(HotelContext);

  return (
    <>
      <div className='w-full mx-auto z-10 fixed flex justify-between items-center p-4 py-4 bg-white shadow-lg'>
        {/* Left Side */}
        <div className='flex items-center'>
          <div onClick={() => setNav(!nav)} className='cursor-pointer lg:hidden'>
            <AiOutlineMenu size={30} />
          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            MacAgutu<span className='font-bold'>Eatery</span>
          </h1>
          {/* Delivery/Pickup Toggle (Hidden on small screens) */}
          <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ml-4'>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25} />
          <input
            className='bg-transparent p-2 w-full text-center'
            type='text'
            placeholder='Search foods'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Cart Button - Visible on all screen sizes now */}
        <Link to="/cart">
          <button className='bg-black text-white flex items-center py-2 px-4 rounded-full'>
            <BsFillCartFill size={20} className='mr-2' />
            Orders: {Object.values(cartItems).reduce((acc, curr) => acc + curr, 0)}
          </button>
        </Link>
      </div>

      {/* Overlay for mobile menu */}
      {nav && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 lg:hidden'></div>}

      {/* Side Drawer Menu (Visible only on small screens) */}
      <div
        className={`${nav ? 'fixed' : 'hidden'} top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 lg:hidden`}
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          McAgutu<span className='font-bold'>Eatery</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
              <MdFavorite size={25} className='mr-4' /> Favorites
            </li>
            <li className='text-xl py-4 flex'>
              <FaWallet size={25} className='mr-4' /> Wallet
            </li>
            <li className='text-xl py-4 flex'>
              <MdHelp size={25} className='mr-4' /> Help
            </li>
            <li className='text-xl py-4 flex'>
              <AiFillTag size={25} className='mr-4' /> Promotions
            </li>
            <li className='text-xl py-4 flex'>
              <BsFillSaveFill size={25} className='mr-4' /> Best Ones
            </li>
            <li className='text-xl py-4 flex'>
              <FaUserFriends size={25} className='mr-4' /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>

      {/* Search Component */}
      <SearchComponent searchQuery={searchQuery} />
    </>
  );
};

export default Navbar;
