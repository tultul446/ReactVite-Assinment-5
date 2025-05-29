import React, { useState } from 'react';
import { HeroCard } from '../../lib/db';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

// Helper to chunk cards into groups (e.g. groups of 4)
const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / 2) }, (_, i) =>
    arr.slice(i * 2, i * size + 4)
  );

const HeroSection = () => {
  const groupedCards = chunkArray(HeroCard, 4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlider = groupedCards[currentIndex];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? groupedCards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === groupedCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full">
      <div className="w-full p-3 lg:w-[90%] mx-auto bg-[#1677BD] rounded-lg mb-4 mt-7">
        <h1 className="text-white font-semibold text-[20px] md:text-[24px] lg:text-[32px] lg:w-[591px] px-4">
          Find the best restaurant ratings below
        </h1>

        <div className="relative flex items-center justify-between">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-0 z-10 transform -translate-x-6 flex items-center justify-center text-[#26395C] w-9 lg:w-12 h-9 lg:h-12 bg-gray-50 hover:bg-white/30 rounded-full transition"
          >
            <AiOutlineLeft className="mx-auto" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 lg:gap-7 w-full h-auto p-4 mb-3">
            {currentSlider.map((item, i) => (

              <div
                key={i}
                className="w-[285px] h-[367px] mt-9 bg-[#F8F8F8] rounded-lg shadow-lg"
              >
                <img src={item.img} alt={item.heading} className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="px-3 py-2 text-xl font-bold text-[#232323]">{item.heading}</h3>
                <p className="px-3 text-sm text-gray-600">{item.des}</p>
                <span className="flex gap-2 px-3 py-2 mb-2 items-center">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={item.star} alt="star" className="w-[17px] h-[16px]" />
                  ))}
                  <p className="text-sm text-gray-600">{item.reviews}</p>
                </span>
              </div>
             


            ))}
          </div>
         

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-0 z-10 transform translate-x-6 flex items-center justify-center text-[#26395C] w-9 lg:w-12 h-9 lg:h-12 bg-gray-50 hover:bg-white/30 rounded-full transition"
          >
            <AiOutlineRight className="mx-auto" />
          </button>
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
  );
};

export default HeroSection;
