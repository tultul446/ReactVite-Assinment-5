import React from 'react'
import MyMap from '../common/MyMap';
import SortMenu from '../common/Sort'
import ReviewCard from '../common/ReviewCard';
import { NavLink } from 'react-router';
const SingaporeRes = () => {
  return (
    <section className='grid grid-cols-1  lg:grid-cols-2 w-auto container mt-5 gap-5 overflow-hidden p-4'>
      {/* left section */}
  <section className='ml-9 mt-5 w-full'>

 <div className='flex '>
    <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-blue-800' : 'text-gray-500'} flex flex-col items-center`
              }
            >Home /</NavLink>
 
 
   <span className='text-sm text-gray-600'>All Restaurants</span></div>
     <div className='md:flex gap-5'>
      <h1 className='text-[22px] w-auto md:text-[32px] px-2  font-bold text-[#1E1E1E]'>best restaurants in singapore</h1>
      <div  className='md:ml-0 ml-17'>
        <SortMenu/>
      </div>
     </div>
 {/* Reviews section */}
<div className='flex mt-4'>
<div className='p-1'>
 <ReviewCard/>

</div>

</div>


  </section>


   {/* Right section */}
<section>
<div className='lg:ml-9 lg:-mr-15'>
    <MyMap/>
</div>

</section>

    </section>
  )
}

export default SingaporeRes;

