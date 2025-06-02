import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { HiBarsArrowDown } from "react-icons/hi2";

const SortMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className='relative inline-block text-left'>
      {/* Sort Button */}
      <button
        onClick={toggleMenu}
        className='flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-500 transition'
      >
        <HiBarsArrowDown  className='w-4 h-4' />
        <span className='text-sm'>Sort</span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className='absolute right-0 mt-5 w-48 bg-gray-50 border border-gray-200 rounded-lg shadow-lg z-50'>
          {/* Close Button */}
          <div className='flex justify-end p-2'>
            <button
              onClick={closeMenu}
              className='text-red-900 hover:text-red-500  mr-5'
            >
             <IoCloseSharp className='w-9 h-9'/>
            </button>
          </div>

          {/* Menu Items */}
          <div className='flex flex-col px-4 py-1 text-lg text-gray-600 space-y-2 font-semibold m-2'>
            <button className='py-1 text-left hover:text-blue-700 hover:bg-blue-100'>
              All feedbacks
            </button>
            <button className='py-1 text-left hover:text-blue-700 hover:bg-blue-100'>
              Highest rated
            </button>
            <button className='py-1 text-left hover:text-blue-700 hover:bg-blue-100'>
              Oldest rated
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SortMenu;
