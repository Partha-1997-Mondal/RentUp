import React from 'react'
import './location.css'
import a from '../../image/location/city-1.png'
import b from '../../image/location/city-2.png'
import c from '../../image/location/city-3.png'
import d from '../../image/location/city-4.png'
import e from '../../image/location/city-5.png'
import f from '../../image/location/city-6.png'



function location() {
  return (
    <div>
      <section className='location_heading'>
            <h1 className='locationhead'>Explore By Location</h1>
            <p className='locationpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </section>
        <section className='city'>
      
            <img src={a} className="city_img"/>
            <p className='imginside'>New Orleans, Louisiana<br/>
                12 Villas07 Offices10 Apartments</p>
            <img src={b} className="city_img" />
            <img src={c} className="city_img" />
        </section>
        <section className='city'>
            <img src={d} className="city_img" />
            <p className='imginside'>Montreal, Canada<br></br>
12 Villas07 Offices 10 Apartments</p>
            <img src={e}  className="city_img"/>
            <img src={f} className="city_img" />
        </section>

    </div>
  )
}

export default location
