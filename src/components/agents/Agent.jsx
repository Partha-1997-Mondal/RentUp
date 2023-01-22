import React from 'react'
import './agent.css'
import a from '../../image/customer/team-1.jpg'
import b from '../../image/customer/team-2.jpg'
import c from '../../image/customer/team-3.jpg'
import d from '../../image/customer/team-4.jpg'
import e from '../../image/customer/team-5.jpg'



function Agent() {
  return (
    <div className='agent'>
        <section className='agents_heading'>
      <h4 className='feature_agent'>Our Featured Agents</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </section>


      <section className='carddetails'>


        <div className='card'>
       <button className='listingbutton'>50  Listings</button>
        <div className='details'>
            <img src={a} className="agents"/>
        </div>
        <img src="https://img.icons8.com/ios/50/null/visit.png" className='location_tag'/>Liverpool, Canada
        <p className='agent_name'>Sargam S. Singh</p>
        <div className='icons_list'>
        <img src="https://img.icons8.com/office/16/null/facebook-new.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/linkedin.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/twitter--v1.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" className='icons'/>
        </div>
        <div className='msg_call'>
            <button className='msg'> Message</button>
            <button className='call'>Call</button>
        </div>
        </div>



        

        <div className='card'>
       <button className='listingbutton'>60  Listings</button>
        <div className='details'>
            <img src={b} className="agents"/>
        </div>
        <img src="https://img.icons8.com/ios/50/null/visit.png" className='location_tag'/>Liverpool, Canada
        <p className='agent_name'>Harijeet M. Siller</p>
        <div className='icons_list'>
        <img src="https://img.icons8.com/office/16/null/facebook-new.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/linkedin.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/twitter--v1.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" className='icons'/>
        </div>
        <div className='msg_call'>
            <button className='msg'> Message</button>
            <button className='call'>Call</button>
        </div>
        </div>

        

        <div className='card'>
       <button className='listingbutton'>60  Listings</button>
        <div className='details'>
            <img src={c} className="agents"/>
        </div>
        <img src="https://img.icons8.com/ios/50/null/visit.png" className='location_tag'/>Montreal, Canada
        <p className='agent_name'>Anna K. Young</p>
        <div className='icons_list'>
        <img src="https://img.icons8.com/office/16/null/facebook-new.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/linkedin.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/twitter--v1.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" className='icons'/>
        </div>
        <div className='msg_call'>
            <button className='msg'> Message</button>
            <button className='call'>Call</button>
        </div>
        </div>        
      </section>



      

      <section className='carddetails'>


        <div className='card'>
       <button className='listingbutton'>80  Listings</button>
        <div className='details'>
            <img src={d} className="agents"/>
        </div>
        <img src="https://img.icons8.com/ios/50/null/visit.png" className='location_tag'/>Denever, USA
        <p className='agent_name'>Michael P. Grimaldo</p>
        <div className='icons_list'>
        <img src="https://img.icons8.com/office/16/null/facebook-new.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/linkedin.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/twitter--v1.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" className='icons'/>
        </div>
        <div className='msg_call'>
            <button className='msg'> Message</button>
            <button className='call'>Call</button>
        </div>
        </div>



        

        <div className='card'>
       <button className='listingbutton'>90  Listings</button>
        <div className='details'>
            <img src={e} className="agents"/>
        </div>
        <img src="https://img.icons8.com/ios/50/null/visit.png" className='location_tag'/>2272 Briarwood Drive
        <p className='agent_name'>Michael P. Grimaldo</p>
        <div className='icons_list'>
        <img src="https://img.icons8.com/office/16/null/facebook-new.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/linkedin.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/twitter--v1.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" className='icons'/>
        </div>
        <div className='msg_call'>
            <button className='msg'> Message</button>
            <button className='call'>Call</button>
        </div>
        </div>

        

        <div className='card'>
       <button className='listingbutton'>40  Listings</button>
        <div className='details'>
            <img src={a} className="agents"/>
        </div>
        <img src="https://img.icons8.com/ios/50/null/visit.png" className='location_tag'/>Montreal, USA
        <p className='agent_name'>Adam K. Jollio</p>
        <div className='icons_list'>
        <img src="https://img.icons8.com/office/16/null/facebook-new.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/linkedin.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/twitter--v1.png" className='icons'/>
        <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" className='icons'/>
        </div>
        <div className='msg_call'>
            <button className='msg'> Message</button>
            <button className='call'>Call</button>
        </div>
        </div>        
      </section>
    </div>
  )
}

export default Agent
