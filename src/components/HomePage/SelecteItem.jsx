import React from 'react'
import { NavLink } from "react-router";
import { SelectItems } from '../../lib/db';
const SelectItem = () => {
  return (
    <section className=' ml-15 overflow-hidden'>
     <ul className='flex items-center gap-6 mt-6 ml-6'>
        {SelectItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-blue-800' : 'text-gray-500'} flex flex-col items-center`
              }
            >
              <img src={item.icon} alt={item.label} className='w-4' />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SelectItem;
