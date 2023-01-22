import React from 'react'
import './property.css'
import a from '../../image/list/p-1.png'
import b from '../../image/list/p-2.png'
import c from '../../image/list/p-4.png'
import d from '../../image/list/p-5.png'
import e from '../../image/list/p-6.png'
import f from '../../image/list/p-7.png'




function Property() {
  return (
    <div >
      <div className='property_heading'>
        <h1 className='propertyh1'>Recent Property Listed</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br> labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>

        <div className='property'>
                <div className='property_details'>
                    <img src={a} className="card_img" /><br></br>
                    <button className='sellrent'>For Rent</button>
                    <h5 className='real'>Red Carpet Real Estate</h5>
                    <h5 className='add'>210 Zirak Road, Canada</h5>
                    <div className='card_price'><button className='btn_price'>$3,700</button><h4>/sqft</h4></div>
                </div>

                <div className='property_details'>
                    <img src={b} className="card_img" /><br></br>
                    <button className='sellrent'>For Rent</button>
                    <h5 className='real'>Red Carpet Real Estate</h5>
                    <h5 className='add'>210 Zirak Road, Canada</h5>
                    <div className='card_price'><button className='btn_price'>$3,700</button><h4>/sqft</h4></div>
                </div>

                <div className='property_details'>
                    <img src={c} className="card_img" /><br></br>
                    <button className='sellrent'>For Rent</button>
                    <h5 className='real'>Red Carpet Real Estate</h5>
                    <h5 className='add'>210 Zirak Road, Canada</h5>
                    <div className='card_price'><button className='btn_price'>$3,700</button><h4>/sqft</h4></div>
                </div>
        </div>

        <div className='property'>
                <div className='property_details'>
                    <img src={d} className="card_img" /><br></br>
                    <button className='sellrent'>For Rent</button>
                    <h5 className='real'>Red Carpet Real Estate</h5>
                    <h5 className='add'>210 Zirak Road, Canada</h5>
                    <div className='card_price'><button className='btn_price'>$3,700</button><h4>/sqft</h4></div>
                </div>

                <div className='property_details'>
                    <img src={e} className="card_img" /><br></br>
                    <button className='sellrent'>For Rent</button>
                    <h5 className='real'>Red Carpet Real Estate</h5>
                    <h5 className='add'>210 Zirak Road, Canada</h5>
                    <div className='card_price'><button className='btn_price'>$3,700</button><h4>/sqft</h4></div>
                </div>

                <div className='property_details'>
                    <img src={f} className="card_img" /><br></br>
                    <button className='sellrent'>For Rent</button>
                    <h5 className='real'>Red Carpet Real Estate</h5>
                    <h5 className='add'>210 Zirak Road, Canada</h5>
                    <div className='card_price'><button className='btn_price'>$3,700</button><h4>/sqft</h4></div>
                </div>
        </div>



    </div>
  )
}

export default Property
