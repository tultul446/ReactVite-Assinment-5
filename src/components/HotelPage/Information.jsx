import React from 'react'
import MyMap from '../common/MyMap'

const Information = () => {
  return (
    <section className='container p-2 mb-5'>

        <div className='container mx-auto mt-10  p-5 lg:flex  gap-5'>
      {/* left side */}
      <div className='w-full md:mt-8   lg:w-1/2  md:py-16 p-5 md:px-18 rounded-lg  space-y-3 lg:space-y-6'>
    <h2 className='text-[34px] text-[#1E1E1E] font-bold'>More informations</h2>
     <div className='flex gap-2 text-gray-600'>
        <img src="./icon24.png" alt="" className='w-[16px] h-[16px] mt-1'/>
        <p>See the menu</p>
     </div>

     <div className='flex gap-2 text-gray-600'>
        <img src="./icon25.png" alt="" className='w-[16px] h-[16px]'/>
        <p>+847 87 37 29 01</p>
     </div>

     <div className='flex gap-2 text-gray-600'>
        <img src="./icon26.png" alt="" className='w-[16px] h-[16px] mt-1'/>
        <p>Singapour, Bishan</p>
     </div>
     <div className='flex gap-2 text-gray-600'>
        <img src="./icon27.png" alt="" className='w-[16px] h-[16px] mt-1'/>
        <p>7j/7, 08:00 - 22:00</p>
     </div>
     <div className='flex gap-2 text-gray-600'>
        <img src="./icon28.png" alt="" className='w-[16px] h-[16px] mt-1'/>
        <p>www.bellaitalia.com</p>
     </div>
     <div className='flex  gap-4 mt-5 '>
        <img src="./icon23.png" alt="" className='w-[29px] h-[29px]' />
        <img src="./icon22.png" alt="" className='w-[29px] h-[29px]'/>
        <img src="./icon21.png" alt="" className='w-[29px] h-[29px]'/>
        <img src="./icon20.png" alt="" className='w-[29px] h-[29px]'/>
        <p></p>
     </div>


</div>
      {/* Right side */}
      <div className='w-full lg:w-1/2 p-4'>
      <MyMap/>
      </div>

</div>
     <div className='bg-gray-200 w-full h-[2px] rounded-full'/>
    </section>
  )
}

export default Information

