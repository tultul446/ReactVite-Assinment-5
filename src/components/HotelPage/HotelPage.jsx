import React from 'react'
import Navbar from '../common/Navbar'
import HeroSection from './Herosection'
import PhotoSection from './PhotoSection'

import Information from './Information'
import RatingComponent from './RatingComponent'
import ReviewSection from './ReviewSection'
import Discover from './Discover'
import Footer2 from '../common/footer'





const HotelPage = () => {
  return (
    <div>
      <Navbar/>
  
      <HeroSection/>
      <PhotoSection/>
     <Information/> 
     <RatingComponent/>
    <ReviewSection/>
    <Discover/>
      <Footer2/>
    </div>
  )
}

export default HotelPage
