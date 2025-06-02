import React, { useState } from "react";
import Modal from "./Modal";
import { IoAppsSharp } from "react-icons/io5";
 function PhotoCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
  
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-white text-gray-700 w-auto lg:w-[220px] lg:h-10   rounded-full hover:bg-blue-100 flex text-[9px] lg:text-sm gap-1"
      >
      <IoAppsSharp className='mt-1'/> View all photos (7)
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
export default PhotoCard; 