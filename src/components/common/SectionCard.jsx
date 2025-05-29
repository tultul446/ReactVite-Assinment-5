import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const AutoSlider = () => {
  const slides = [
    {
      title: "Bottega",
      image: "./image1.png", 
      rating: 5.0,
      reviews: 876,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      title: "Another Restaurant",
      image: "./image2.png",
      rating: 4.5,
      reviews: 652,
      description:
        "This is another restaurant description for testing the slider component layout.",
    },
    
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-lg w-full h-60 object-cover"
              />
              <h2 className="text-xl font-semibold mt-4">{slide.title}</h2>
              <p className="text-gray-600 text-center mt-2">{slide.description}</p>
              <div className="flex items-center mt-3">
                <div className="flex space-x-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M12 .587l3.668 7.431L24 9.75l-6 5.851L19.335 24 12 19.854 4.665 24 6 15.601 0 9.75l8.332-1.732z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 ml-2">
                  {slide.rating} ({slide.reviews} reviews)
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;