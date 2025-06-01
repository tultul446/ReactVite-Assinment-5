import React from 'react'
import MyMap from '../common/MyMap';
import SortMenu from './Sort';
import ReviewCard from '../common/ReviewCard';
import { NavLink } from 'react-router';
const SingaporeRes = () => {
  return (
    <section className='grid grid-cols-1  lg:grid-cols-2 w-auto container mt-5 gap-5'>
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
     <div className='flex gap-5'>
      <h1 className='text-[32px] font-bold text-[#1E1E1E]'>best restaurants in singapore</h1>
      <div>
        <SortMenu/>
      </div>
     </div>
 {/* Reviews section */}
<div className='flex'>
<div className='p-6'>
 <ReviewCard/>

</div>

 <div>
   {/* Content */}
         {/* <div className="px-2 py-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">The snug</h1>
          <p className="text-gray-600 text-sm mb-4">
            The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
          </p>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i}><img src="./star.png" alt="" /></span>
              ))}
            </div>
            <span className="text-gray-500 text-sm">4.5 (654 reviews)</span>
          </div>
         
        </div> */}
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

