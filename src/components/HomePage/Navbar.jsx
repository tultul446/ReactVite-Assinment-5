import React from 'react'
import SearchBar from '../common/Search'
const Navbar = () => {
  return (
    <nav className='w-full border-b-1 border-gray-200'>
      <div className='sm:flex space-y-2 justify-between items-center w-full lg:w-[80%] mx-auto p-4'>
        <img src="./icon1.png" alt="" className='w-[166px] h-[49.39px]  mt-[48px]'/>
        <SearchBar/>


        <div className='md:flex items-center gap-4 hidden'>
          <img src="./icon14.png" alt="" />
          <button className='w-[233px] h-[47px] bg-[#1E1E1E] text-white rounded-full '>MyFeedback for business</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
