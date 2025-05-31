import { useState } from 'react';
import React  from 'react'
import { activityData } from '../../lib/db';
import { AiOutlineRight} from 'react-icons/ai';
 const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / 2) }, (_, i) =>
    arr.slice(i * 2, i * size + 4)   );





const Activities = ( ) => {
   const groupedCards = chunkArray(activityData, 4);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentSlider = groupedCards[currentIndex];


      const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
     const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === groupedCards.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className='min-w-auto overflow-hidden'>
     <div className='w-auto p-6'>
        <h1 className='text-[32px] p-3 font-semibold'>Recents avtivities</h1>
          

          <div className="relative flex items-center justify-between">
          <button
                     onClick={handleNext}
                     aria-label="Next Slide"
                     className="absolute right-0 z-10 transform translate-x-6 flex items-center justify-center text-[#26395C] w-9 lg:w-10 h-9 lg:h-10 bg-[#fff] hover:bg-gray-600 rounded-full transition mr-7"
                   >
                     <img src='./Vector10.png' className="mx-auto" />
                   </button>  <div/>


          
        {/* main content */}

<div className='grid grid-cols-1  lg:grid-cols-3 gap-7 '>

  {currentSlider.map((item, i) => (

 <div className='w-auto lg:w-[320px]   h-[500px] bg-[#eae6e6] mt-5 py-4 px-3 rounded-xl' key={i} >
            <div className='flex gap-5'>
 <img src={item.icon} alt="" className='w-[26px] h-[27px] mt-2'/>
                <span>
                    <h4 className='text-[21px] text-[#232323] font-bold '>{item.name}</h4>
                    <p className='text-[#8A8A8A] text-sm'>{item.p}</p>
                </span>
            </div>
            <div className='mt-5 flex gap-3'>
                 {[...Array(5)].map((_, i) => (
                    <img key={i} src={item.star} alt="star" className="w-[19px] h-[17px] mt-2" />
                  ))}
                <p>{item.date}</p>
            </div>
            <p className='text-sm  mt-5 text-gray-600'>{item.des}</p>
             <p>{item.des2}</p>

            <div className='flex gap-4 mt-5 rounded-xl'>
            {item.images.map((img, i) => (
                 <img src={img} alt="" className='rounded-xl w-19 ' key={i}/>
            ))}
               
              
            </div>
          <button className='mt-5 underline font-semibold'>Discover</button>
        </div>
 

  ))}
   
  
</div>

    </div> 

<div className="flex justify-center items-center gap-2 mt-6">
          {groupedCards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>




 </div>
    </section>
  )
}

export default Activities;
