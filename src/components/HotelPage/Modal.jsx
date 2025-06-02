import React, { useState } from "react";
import { IoClose, IoChevronForwardSharp, IoChevronBack } from "react-icons/io5";

const images = [
  "./R1.png",
  "./R2.png",
  "./R3.png",
  "./R4.png",
  "./R5.png",
  "./R6.png",
  "./R7.png",
];

 export default function Modal({ isOpen, onClose }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden shadow-lg">
      <div className="bg-white rounded-lg shadow-lg relative w-[90%] md:w-[70%] max-w-3xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <IoClose size={24} />
        </button>
        <div className="relative overflow-hidden">
          <img
            src={images[current]}
            alt="Restaurant"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100"
          >
            <IoChevronBack />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100"
          >
            <IoChevronForwardSharp />
          </button>
        </div>
        <div className="flex justify-center p-4 gap-2 overflow-x-auto">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Thumbnail"
              onClick={() => setCurrent(idx)}
              className={`w-20 h-12 object-cover cursor-pointer border-2 ${
                idx === current ? "border-blue-500" : "border-transparent"
              } rounded`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}