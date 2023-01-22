import React from 'react'
import Agent from '../agents/Agent'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Package from '../package/Package'
import Location from '../location/Location'
import Awrds from '../awards/Awrds'
import Property from '../property/Property'
import Types from '../types/Types'
import Home from '../home/Home'
function Pages() {
  return (
    <div>
      <Navbar />
      <Home />
      <Types />
      <Property />
      <Awrds />
      <Location />
      <Agent />
      <Package />
      <Footer />
    </div>
  )
}

export default Pages
