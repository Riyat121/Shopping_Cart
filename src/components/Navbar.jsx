import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cart = useSelector((state) => state.cart || []); // ✅ get cart array

  return (
    <nav className='flex items-center h-20 max-w-6xl justify-between'>
      <NavLink to="/">
        <div className='ml-40'>
          <img className='ml-20 h-[58px] w-[58px]' src="./original-619e06095582449662738c43090f6b40.webp" alt="Logo" />
        </div>
      </NavLink>

      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/Cart">
          <div className='relative'>
            <HiShoppingCart className='text-2xl' />
            {cart.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

