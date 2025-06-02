import React from 'react'
import DiscoverCard from './DiscoverCard';
import { cardItems } from '../../lib/db';




const Discover = () => {



  return (
    <section className='w-full overflow-hidden'>
      <div>
       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cardItems.map((card, index) => (
        <DiscoverCard
          key={index}
          title={card.title}
          images={card.images}
         des={card.des}
         rating={card.rating}
         reviews={card.reviews}
        />
      ))}
    </div>
   

</div>
    </section>
  )
}

export default Discover