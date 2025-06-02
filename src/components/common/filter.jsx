import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";

const FilterMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className='relative inline-block text-left '>
      {/* Sort Button */}
      <button
        onClick={toggleMenu}
        className='flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-500 transition'
      >
        <IoFilter   className='w-4 h-4' />
        <span className='text-sm'>Filter</span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className='absolute ml-6 right-0 mt-3 w-38 lg:w-48 bg-gray-50 border border-gray-200 rounded-lg shadow-lg z-50 '>
          {/* Close Button */}
          <div className='flex justify-end p-2'>
            <button
              onClick={closeMenu}
              className='text-red-900 hover:text-red-500  mr-5'
            >
             <IoCloseSharp className='w-5 h-5'/>
            </button>
          </div>

          {/* Menu Items */}
          <div className='flex flex-col px-4 py-1 text-lg text-gray-600 space-y-2 font-semibold '>
            <button className='py-1 text-left hover:text-blue-700 hover:bg-blue-100 '> 
            <span className="flex mt-4  gap-1 ">1
        {Array.from({ length: 5 }).map((_, i) => (
          <img src="./star.png" key={i}/>
        ))}
      </span>  
            </button>
            <button className='py-1 text-left hover:text-blue-700 hover:bg-blue-100 '>
            <span className="flex mt-4  gap-1">2
        {Array.from({ length: 5 }).map((_, i) => (
          <img src="./star.png" key={i}/>
        ))}
      </span>  
            </button>
            <button className='py-1 text-right hover:text-blue-700 hover:bg-blue-100 '> 
            <span className="flex mt-4  gap-1">3
        {Array.from({ length: 5 }).map((_, i) => (
          <img src="./star.png" key={i}/>
        ))}
      </span>  
            </button>
            <button className='py-1 text-right hover:text-blue-700 hover:bg-blue-100  '>
            <span className="flex mt-4  gap-1">4
        {Array.from({ length: 5 }).map((_, i) => (
          <img src="./star.png" key={i}/>
        ))}
      </span>  
            </button>
           
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterMenu;
