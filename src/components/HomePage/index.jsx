import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Hero'
import CardSection from './CardSection'
import MyFeedback from './MyFeedback'
import Activities from './Acitivites'
import Footer from '../common/footer'
const index = () => {
  return (
    <>
     <Navbar/>
      <HeroSection/>
      <CardSection/>
      <MyFeedback/>
      <Activities/>
      <Footer/>
    </>
  )
}

export default index;
