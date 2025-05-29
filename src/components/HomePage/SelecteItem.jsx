import React from 'react'
import { selectItems } from '../../lib/db/index'
const SelectItem = () => {
  return (
    <section className='w-full'>
      <ul>
        <li className='w-full flex justify-between items-center flex-wrap gap-7 p-3 lg:w-[80%] mx-auto'>
            {selectItems.map((item, index) => (
               <span key={index} className='space-x-3 space-y-2'>
                <img src={item.img} alt="" className='w-[26px] h-[23px]'/>
                 <p className='text-sm text-gray-400'>{item.p}</p>
               </span>
            ))}
            
        </li>
      </ul>
    </section>
  )
}

export default SelectItem;
