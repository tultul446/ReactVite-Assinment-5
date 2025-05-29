import React from 'react'
import Card from './Card';
import { cards } from '../../lib/db';




const CardSection = () => {



  return (
    <section className='w-full p-4'>
      <div>
       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card
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

export default CardSection
