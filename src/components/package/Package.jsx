import React from 'react'
import './package.css'
function Package() {
  return (
    <div>
        <section className='header'>
      <h1>Select Your Package</h1>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum <br/> deleniti atque corrupti quos dolores</p>
        </section>
        <section className='price'>
            <div className='basic'>
                <h3 className='priceheading'>Basic</h3>
                <h1>$<span className='doler'>29</span></h1>
                <p>per user, per month</p>
                <p className='deta'><img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>99.5% Uptime Guarantee <br/>
                <img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>120GB CDN Bandwidth<br/>
                <img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>5GB Cloud Storage<br/>
               
                <img src="https://img.icons8.com/parakeet/48/null/delete-sign.png" className='pricetick'/>Personal Help Support<br/>
                <img src="https://img.icons8.com/parakeet/48/null/delete-sign.png" className='pricetick'/>Enterprise SLA<br/>
                </p>
                <button className='start'>Start Basic</button>
            </div>
            <div className='standard'>
                <h3 className='priceheading'>Standard</h3>
                <h1>$<span className='doler'>49</span></h1>
                <p>per user, per month</p>
                <p className='deta'><img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>99.5% Uptime Guarantee <br/>
                <img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>120GB CDN Bandwidth<br/>
                <img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>10GB Cloud Storage<br/>
               
                <img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>Personal Help Support<br/>
                <img src="https://img.icons8.com/parakeet/48/null/delete-sign.png" className='pricetick'/>Enterprise SLA<br/>
                </p>
                <button className='change'>Start Standard</button>
            </div>
            <div className='platinum'>
                <h3 className='priceheading'>Platinum</h3>
                <h1>$<span className='doler'>79</span></h1>
                <p>per user, per month</p>
                <p className='deta'><img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>99.5% Uptime Guarantee <br/>
                <img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>120GB CDN Bandwidth<br/>
                <img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>20GB Cloud Storage<br/>
               
                <img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>Personal Help Support<br/>
                <img src="https://img.icons8.com/flat-round/64/null/checkmark.png" className='pricetick'/>Enterprise SLA<br/>
                </p>
                <button className='start'>Start Palatinum</button>
            </div>
        </section>
    </div>
  )
}

export default Package
