import React from 'react'
import Navbar from '../common/Navbar'
import HeroSection from './Herosection'
import PhotoSection from './PhotoSection'
import PhotoCard from './PhotoCard'
import Information from './Information'
import RatingComponent from './RatingComponent'
import ReviewSection from './ReviewSection'



const HotelPage = () => {
  return (
    <div>
      <Navbar/>
     {/* <PhotoCard/> */}
      <HeroSection/>
      <PhotoSection/>
     <Information/> 
     <RatingComponent/>
    <ReviewSection/>
      
    </div>
  )
}

export default HotelPage
