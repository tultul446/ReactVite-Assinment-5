import { useState, useEffect } from 'react';



const CardReview = () => {
  const allReviews = [
    {
      images: './icon29.png',
      title: 'Wei Jie',
      location: 'Singapore, Little india',
      rating: 4.5 ,
      reviews:'(654 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout..',
    },
    {
      images: './icon29.png',
      title: 'Mei Ling',
      location: 'Singapore, Orchad boulevard',
      rating: 2.5,
       reviews:'(354 reviews)',
      comment: 'The lorem ipsum is in printing and typesetting.',
    },
    {
      images: './icon29.png',
      title: 'Wei Xiong',
      location: 'Singapore, Takashimaya',
      rating: 4.5,
       reviews:'(554 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
    {
      images:'./icon29.png',
      title: 'The Grand Hall',
      location: 'Singapore, Orchard Road',
      rating: 3.0,
 reviews:'(654 reviews)',
      comment: 'The lorem ipsum is in printing and typesetting.',
    },
    {
      images: './icon29.png',
      title: 'Xin Yi',
      location: 'Singapore, Orchard Road',
      rating:5.0 ,
       reviews:'(1600 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
    {
      images: './icon29.png',
      title: 'Zhi Hao',
      location: 'Singapore, Orchard Road',
      rating:3.0 ,
       reviews:'(354 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
    {
      images: './icon29.png',
      title: 'Li Hua',
      location: 'Singapore, DLLM loklok',
      rating: 5.0 ,
       reviews:'(1654 reviews)',
      comment: 'The lorem ipsum is in printing and typesetting.',
    },
    {
      images: './icon29.png',
      title: 'Si Ying',
    location: 'Singapore, Bedemeer',
      rating: 4.5 ,
       reviews:'(654 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
    {
      images:'./icon29.png',
      title: 'Wei Ting',
      location: 'Singapore, Orchard Road',
      rating: 3.0 ,
       reviews:'(654 reviews)',
      comment: 'The lorem ipsum is in printing and typesetting.',
    },
    {
      images: './icon29.png',
      title: 'Wei Ting',
      location: 'Singapore, Toa Payoh',
      rating: 5.0 ,
       reviews:'(1654 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
  ];

  const [visibleReviews, setVisibleReviews] = useState(2);
 
  

 

  const showMoreReviews = () => {
    if (visibleReviews < allReviews.length) {
      setVisibleReviews(visibleReviews + 1);
    }
  };

 const closeReviews = () => {
    setVisibleReviews(1);
  };






  return (
    <div className="p-4 m-9">
      {allReviews.slice(0, visibleReviews).map((review, index) => (
        <div key={index} className="sm:flex w-auto h-94 sm:h-58 gap-4 mb-4 bg-white shadow rounded  px-2 py-6">
         <img src={review.images} alt="" className='w-9 h-9 sm:mt-18 ml-2'/>

          <div className='p-6'>
              <button
            onClick={closeReviews}
            disabled={visibleReviews <= 1}
            className={`ml-[10rem] lg:ml-[40rem] sm:ml-[34rem] px-4 py-2 font-bold rounded-full text-gray-900 ${visibleReviews <= 1 ? 'bg-red-200 cursor-not-allowed' : 'bg-green-200 hover:text-blue-950'}`}
          >
            X
          </button>

            <h3 className="text-lg font-semibold">{review.title}</h3>
           <p className="text-gray-600 text-sm">{review.location}</p>

           
<div className="sm:flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(review.rating) ? '★' : '☆'}</span>
              ))}
               <div>
              <span className="text-gray-700 ml-2">{review.rating}</span>
           
           
           <span className="text-gray-400 ml-2">{review.reviews}</span>
           </div>
 </div>
 <p className='text-gray-600 text-sm lg:w-[501px]'>{review.comment}</p>


 
          </div>
        </div>
      ))}

      {visibleReviews < allReviews.length && (
        <div className="flex justify-center">
          <button
            onClick={showMoreReviews}
            className="bg-[#1677BD] rounded-full hover:bg-blue-600 text-white px-4 py-2"
          >
            Show More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default CardReview;
