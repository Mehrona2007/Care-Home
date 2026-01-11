import React from 'react'
import "./contactSection.css"
import IndImg from "../assets/ind.png"
import Ind1Img from "../assets/ind1.png"

function ContactSection() {
  return (
   <>
   <div className="indoor">
    <div className="indoor-t">
       <h1>Indoor</h1>
    </div>
    <div className="indoor-cards">
        <div className="indoor-card">
            <div className="indoor-img">
                <img src={IndImg} alt="ind" />
            </div>
          <div className="indoor-text">
            <h3>Private Rooms</h3>
            <p>Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim
                   veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

         <div className="indoor-card">
            <div className="indoor-img">
                <img src={Ind1Img} alt="ind" />
            </div>
          <div className="indoor-text">
            <h3>Semi- Private Rooms</h3>
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

export default ContactSection
