import React from 'react'
import './home.css'
import a from '../../image/banner.jpg'

function Home() {
  return (
    <div className='allhome'>
        <img src={a} />
        <div className='top'>
            <h1 className='head'>Search Your Next Home</h1>
            <p>Find new & featured property located in your local city.</p>
        </div>
        <div className='searchbar'>
            <div className='laveldata'>
                <label>City/Street</label>
                <input  type='text' placeholder='City/Street'></input>
            </div>
            <div className='laveldata'>
                <label>Property Type</label>
                <input type='text' placeholder='Property Type'></input>
            </div>
            <div  className='laveldata'>
                <label>Price Range</label>
                <input type='number' placeholder='Price Range'></input>
            </div>
            <div>
                
                <button className='searchbtn'>Search</button>
            </div>
        </div>
        

    </div>
  )
}

export default Home
