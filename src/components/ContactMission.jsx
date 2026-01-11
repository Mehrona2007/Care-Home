import React from 'react'
import "./contactMission.css"
import OutImg from "../assets/out.png"
import Out1Img from "../assets/out1.png"


function ContactMission() {
  return (
   <>
   <div className="indoor1">
       <div className="indoor1-t">
          <h1>Outdoor</h1>
       </div>
       <div className="indoor1-cards">
           <div className="indoor1-card">
               <div className="indoor1-img">
                  <img src={OutImg} alt="" />
               </div>
             <div className="indoor1-text">
               <h3>Outdoor Spaces</h3>
               <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat.</p>
             </div>
           </div>
   
            <div className="indoor1-card">
               <div className="indoor1-img">
                    <img src={Out1Img} alt="" />
               </div>
             <div className="indoor1-text">
               <h3>Gardens</h3>
               <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat.</p>
             </div>
           </div>
   
       </div>
   
      </div>
   </>
  )
}

export default ContactMission
