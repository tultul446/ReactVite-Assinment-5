import React from 'react'

const MyFeedback = () => {
  return (
    <section className='w-full p-4'>
      <div className='text-center font-semibold'>
        <h1 className='text-[22px] text-[#1E1E1E]'>Discover more cool restaurants</h1>
        <button className='w-[175px] h-[47px] rounded-[23.5px] bg-[#1677BD] text-[#FFFFFF] mt-3'>Show more</button>

         <div className='flex  flex-col-reverse lg:flex-row  bg-[#F2F2F2] w-auto lg:gap-8  lg:py-15 mt-5'>
            {/* left side */}
            <div className='w-[90%] lg:ml-14 lg:mt-10 text-start p-5 lg:p-2'>
                <h3 className='text-[#1E1E1E] text-[18px] lg:text-[26px] font-bold w-auto  lg:w-[70%] mt-5 '>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h3>
                <p className='mt-5 text-sm lg:text-md text-[#5E5E5E] w-[80%]'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                <button className='mt-5 bg-[#1E1E1E] text-white text-sm lg:w-[296px] lg:h-[52px] rounded-[26px] p-2'>Explore MyFeedback business</button>
            </div>
            {/* Right side */}
            <div className='w-full p-4'>
                <img src="./imag1.png" alt="" />
            </div>
         </div>


      </div>
    </section>
  )
}

export default MyFeedback

