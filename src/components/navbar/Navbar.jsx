import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <section className='heading'>
      <img src="https://img.icons8.com/pastel-glyph/64/null/smart-home-checked.png" className='logoimg'/>
      <h1>Rent<span>Up</span></h1>
      </section>
      <section className='lists'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
      </section>
      <section className='listsend'>
        <span>2</span>
        <h3>My List</h3>
        <button type='button'><span>Sign In</span></button>
      </section>
    </div>
  )
}

export default Navbar
