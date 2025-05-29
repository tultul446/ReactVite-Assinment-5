import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const CardCarousel = ({ images }) => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="rounded-xl overflow-hidden"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Slide  ${index}`}
            className="w-full h-60 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;