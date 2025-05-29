import React from 'react'
import Navbar from '../common/Navbar'
import SelectItem from './SelecteItem'
import HeroSection from './Hero'
import CardSection from './CardSection'
import MyFeedback from './MyFeedback'
import Activities from './Acitivites'
import Footer from '../common/footer'
const index = () => {
  return (
    <>
     <Navbar/>
     <SelectItem/>
      <HeroSection/>
      <CardSection/>
      <MyFeedback/>
      <Activities/>
      <Footer/>
    </>
  )
}

export default index;
