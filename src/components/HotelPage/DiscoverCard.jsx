import React from 'react';
import CardCarousel from '../common/CarousalCard';

const DiscoverCard = ({ title, images, rating, des, reviews }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4">
      <CardCarousel images={images} />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500 font-medium text-sm"> {des}</p>
        <span className='flex gap-4 mt-5'>
       {[...Array(5)].map((_, i) => (
                    <img key={i} src={rating} alt="star" className="w-[19px] h-[17px]" />
                  ))}
        <p className='text-sm'>{reviews}</p></span>
      </div>
    </div>
  );
};

export default DiscoverCard;