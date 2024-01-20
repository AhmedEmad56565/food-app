/* eslint-disable react/prop-types */
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className='flex-between items-center py-5'>
        {/* Left side  */}
        <div className='flex items-center'>
          <div
            className='cursor-pointer
          '
            onClick={() => setShowSidebar(true)}
          >
            <AiOutlineMenu size={30} />
          </div>
          <h1 className='text-[18px] sm:text-3xl lg:text-4xl px-2'>
            Best <span className='font-bold'>Eats</span>
          </h1>
          <div className='hidden lg:flex items-center bg-gray-200 rounded-full py-1 px-2 space-x-2'>
            <p className='bg-black rounded-full p-1 text-white'>Delivery</p>
            <p>Pickup</p>
          </div>
        </div>
        {/* Middle side  */}
        <div className='flex space-x-2 items-center w-[200px] sm:w-[300px] md:w-[400px] bg-gray-200 px-3 py-2 rounded-full'>
          <AiOutlineSearch size={25} />
          <input
            type='search'
            placeholder='Search foods'
            className='focus:outline-none bg-transparent w-full'
          />
        </div>
        {/* Right side  */}
        <div className='hidden md:flex space-x-2 items-center rounded-full px-4 py-2 bg-black'>
          <FaShoppingCart size={20} color='#fff' />
          <p className='text-white text-md'>Cart</p>
        </div>
        <Sidebar
          showSidebar={showSidebar}
          onClose={() => setShowSidebar(false)}
        />
      </header>
    </>
  );
}
