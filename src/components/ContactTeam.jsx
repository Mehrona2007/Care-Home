import React from 'react'
import "./contactTeam.css"
import AreImg from "../assets/are.png"
import Are1Img from "../assets/are1.png"

function ContactTeam() {
  return (
    <>
    <div className="areas">
        <div className="areas-t">
            <h1>Common Areas</h1>
        </div>
        <div className="areas-imgs">
            <div className="areas-img">
               <img src={AreImg} alt="are" />
            </div>

            <div className="areas-img">
               <img src={Are1Img} alt="are" />
            </div>
        </div>

        <div className="areas-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>

    </>
  )
}

export default ContactTeam
