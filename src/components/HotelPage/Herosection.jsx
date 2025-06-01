import React from 'react'
import { NavLink } from 'react-router';
const HeroSection = () => {
  return (

    <section className='container mx-auto mt-10 mb-5 p-5'>
     <div className='flex mb-5 px-5'> 
       <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-blue-800' : 'text-gray-500'} flex flex-col items-center`
              }
            >Home /</NavLink>
 
 
   <span className='text-sm text-gray-600'> BellaItalia</span></div>
    <div  className='p-2 bg-cover bg-center h-screen lg:flex items-center justify-center text-white relative rounded-md'  style={{ backgroundImage:"url('/heroImage.png')"}}>
      <div className=' mx-auto text-xl lg:w-[500px] lg:ml-16 p-4'>
        <h1 className='text-[52px] text-[#FFFFFF] font-bold'>Bella italia</h1>
        <span className='mt-4 flex gap-1 text-sm text-[#FFFFFF]'> {[...Array(5)].map((_, i) => (
                    <img key={i} src="./star.png" alt="star" className="w-[19px] h-[17px]" />
                  ))}
        <p className='text-sm'>5.0 (834 reviews)</p></span>
     
     <p className='text-sm w-auto md:w-[500px] mt-2 lg:mt-4'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.<br/>
The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
<span className='flex gap-1 mt-2 lg:mt-5 text-sm'>
   <img src="./icon16.png" alt="" className='w-[14px] h-[16px]'/>
  <p>Singapour, Bishan-Ang Mo Kio Park </p>
</span>
<span className='flex gap-1 mt-2 sm:mt-5 text-sm'>
  <img src="./icon17.png" alt="" className='w-[14px] h-[16px]'/>
  <p>7j/7, 08:00 - 22:00</p>
</span>


  <img src="./Logo.png" alt="" className='w-auto lg:w-[139px] lg:h-[139px] rounded-full   -mb-[60%]  mt-[25%] lg:-mb-[12rem] lg:mt-9 mx-auto lg:-mr-5' />
  
      </div>
    

   
    </div>
     
    </section>
  )
}

export default HeroSection
