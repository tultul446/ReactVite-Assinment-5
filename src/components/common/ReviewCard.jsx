import { useState, useEffect } from 'react';



const ReviewCard = () => {
  const allReviews = [
    {
      images: ['./R7.png', './R1.png', './R2.png'],
      title: 'Starbelly',
      rating: 4.5 ,
      reviews:'(654 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
    {
      images: ['./R3.png', './R4.png', './R5.png'],
      title: 'The melt',
      rating: 2.5,
       reviews:'(354 reviews)',
      comment: 'The lorem ipsum is in printing and typesetting.',
    },
    {
      images: ['./R4.png', './R6.png', './R7.png'],
      title: 'Arabia Nights',
      rating: 4.5,
       reviews:'(554 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
    {
      images: ['./R2.png', './R3.png', './R1.png'],
      title: 'The Grand Hall',
      rating: 3.0,
 reviews:'(654 reviews)',
      comment: 'The lorem ipsum is in printing and typesetting.',
    },
    {
      images: ['./R4.png', './R5.png', './R6.png'],
      title: 'The snug',
      rating:5.0 ,
       reviews:'(1600 reviews)',
      comment: 'The lorem ipsum is in printing and typesetting.',
    },
    {
      images: ['./R7.png', './R3.png', './R1.png'],
      title: 'The Grand Hall',
      rating:3.0 ,
       reviews:'(354 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
    {
      images: ['./R2.png', './R4.png', './R1.png'],
      title: 'The Grand Hall',
      rating: 5.0 ,
       reviews:'(1654 reviews)',
      comment: 'The lorem ipsum is in printing and typesetting.',
    },
    {
      images: ['./R2.png', './R3.png', './R1.png'],
      title: 'The Grand Hall',
    
      rating: 4.5 ,
       reviews:'(654 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
    {
      images: ['./R2.png', './R3.png', './R1.png'],
      title: 'The Grand Hall',
      rating: 3.0 ,
       reviews:'(654 reviews)',
      comment: 'The lorem ipsum is in printing and typesetting.',
    },
    {
      images: ['./R2.png', './R3.png', './R1.png'],
      title: 'The Grand Hall',
      rating: 5.0 ,
       reviews:'(1654 reviews)',
      comment: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    },
  ];

  const [visibleReviews, setVisibleReviews] = useState(2);
  const [currentSlides, setCurrentSlides] = useState(
    allReviews.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides((prevSlides) =>
        prevSlides.map((slideIndex, i) => {
          const totalImages = allReviews[i].images.length;
          return (slideIndex + 1) % totalImages;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [0]);

  const showMoreReviews = () => {
    if (visibleReviews < allReviews.length) {
      setVisibleReviews(visibleReviews + 1);
    }
  };

 const closeReviews = () => {
    setVisibleReviews(1);
  };






  return (
    <div className="p-4 w-[250px]  sm:w-[500px]">
      {allReviews.slice(0, visibleReviews).map((review, index) => (
        <div key={index} className="sm:flex h-98 sm:h-48 gap-4 mb-4 bg-white shadow rounded  px-2">
          {/* Image slider for each review */}
          <div className="sm:mt-10 w-38 h-30 overflow-hidden rounded relative ">
            {review.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={review.title}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                  currentSlides[index] === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          <div className='p-3'>
              <button
            onClick={closeReviews}
            disabled={visibleReviews <= 1}
            className={`ml-[9rem] sm:ml-[19rem] px-4 py-2 font-bold rounded-full text-white ${visibleReviews <= 1 ? 'bg-red-400 cursor-not-allowed' : 'bg-green-400 hover:text-blue-950'}`}
          >
            X
          </button>

            <h3 className="text-lg font-semibold">{review.title}</h3>
           
            <p className="text-sm text-gray-600">{review.comment}</p>
<div className="sm:flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(review.rating) ? '★' : '☆'}</span>
              ))}
               <div>
              <span className="text-gray-700 ml-2">{review.rating}</span>
           
           
           <span className="text-gray-400 ml-2">{review.reviews}</span>
           </div>

           </div>
 


 
          </div>
        </div>
      ))}

      {visibleReviews < allReviews.length && (
        <div className="flex justify-center">
          <button
            onClick={showMoreReviews}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;