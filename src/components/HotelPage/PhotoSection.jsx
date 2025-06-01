import React from 'react'

import PhotoCard from './PhotoCard';
const PhotoSection = () => {
  return (
    <section className='mt-19 container mx-auto mb-5'>
      <div className=''>
   <h2 className='text-2xl lg:text-[32px] font-bold p-5 text-[#1E1E1E]'>Discover our magnificent place in photos</h2>
 <p className='px-5 lg:w-[601px] text-[#5E5E5E] text-sm'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
   

<div className='relative'>

<div className='grid grid-cols-4 grid-rows-2 gap-2 mt-6 px-4 '>
<img src="./im1.png" alt="" className='col-span-2  row-span-2 '/>
<img src="./im2.png" alt="" className='w-full  lg:h-[259px]'/>
<img src="./im3.png" alt="" className='w-full lg:h-[259px]'/>
<img src="./im4.png" alt="" className='w-full  lg:h-[259px]'/>
<img src="./im5.png" alt="" className='w-full  lg:h-[259px]'/>



</div>
<div className='absolute -mt-24 mb-3 lg:mb-9 p-3   ml-3 lg:ml-6'>
<button className='px-3 py-1.5'>
     <PhotoCard/>
     </button>
</div>

</div>
      </div>
    </section>
  )
}

export default PhotoSection
