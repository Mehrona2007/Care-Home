import React from 'react'
import "./servicesTeam.css"
import SocImg from "../assets/soc.png"
import Soc1Img from "../assets/soc1.png"
import Soc2Img from "../assets/soc2.png"
import Soc3Img from "../assets/soc3.png"

function ServicesTeam() {
  return (
    <>
    <div className="social">
        <div className="social-t">
         <h1>Recreational and Social Activities</h1>
        </div>

        <div className="social-cards">

            <div className="social-card">
                <div className="social-img">
                      <img src={SocImg} alt="soc" />
                </div>
                <div className="social-text">
             <h2>Yoga</h2>
           <p>Lorem ipsum dolor sit amet consectetur.
            Augue non malesuada <br /> placerat faucibus nam purus sem. Urna pulvinar 
           porttitor dignissim <br /> congue pellentesque ac hac. </p>
                </div>
            </div>

             <div className="social-card">
                <div className="social-img">
                      <img src={Soc1Img} alt="soc" />
                </div>
                <div className="social-text">
             <h2>Board Games</h2>
           <p>Lorem ipsum dolor sit amet consectetur.
            Augue non malesuada <br /> placerat faucibus nam purus sem. Urna pulvinar 
           porttitor dignissim <br /> congue pellentesque ac hac. </p>
                </div>
            </div>

             <div className="social-card">
                <div className="social-img">
                      <img src={Soc2Img} alt="soc" />
                </div>
                <div className="social-text">
             <h2>Gardenning</h2>
           <p>Lorem ipsum dolor sit amet consectetur.
            Augue non malesuada <br /> placerat faucibus nam purus sem. Urna pulvinar 
           porttitor dignissim <br /> congue pellentesque ac hac. </p>
                </div>
            </div>

             <div className="social-card">
                <div className="social-img">
                      <img src={Soc3Img} alt="soc" />
                </div>
                <div className="social-text">
             <h2>Indoor Games</h2>
           <p>Lorem ipsum dolor sit amet consectetur.
            Augue non malesuada <br /> placerat faucibus nam purus sem. Urna pulvinar 
           porttitor dignissim <br /> congue pellentesque ac hac. </p>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default ServicesTeam
