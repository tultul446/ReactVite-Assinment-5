import React from 'react'
import FilterMenu from '../common/filter'
import SortMenu from '../common/sort';
import CardReview from './CardReview';
const ReviewSection = () => {
  return (
    <section className='container  review-section w-full mx-auto'>
      <div>
        <div className='flex justify-start items-center p-4 lg:ml-34 sm:ml-20 ml-15 gap-5'>
           <FilterMenu/>
           <SortMenu/>
        </div>
        <div>
          <CardReview/>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection
