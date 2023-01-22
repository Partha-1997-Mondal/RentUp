import React from 'react'
import './types.css'
import a from '../../image/hero/h1.png'
import b from '../../image/hero/h2.png'
import c from '../../image/hero/h3.png'
import d from '../../image/hero/h4.png'
import e from '../../image/hero/h6.png'



function Types() {
  return (
    <div className='types'>
        <div className='types_header'>
            <h1 className='headerh1'>Featured Property Types</h1>
            <p>Find All Type of Property.</p>
        </div>

      <div className='btn-img'>
        <button className='btncard'><img src={a} className='btncard_img' /></button>
        <button className='btncard'><img src={b}  className='btncard_img' /></button>
        <button className='btncard'><img src={c} className='btncard_img'  /></button>
        <button className='btncard'><img src={d} className='btncard_img'  /></button>
        <button className='btncard'><img src={e} className='btncard_img'  /></button>

      </div>
    </div>
  )
}

export default Types
