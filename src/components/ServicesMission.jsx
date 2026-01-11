import React from 'react'
import "./servicesMission.css"
import DieImg from "../assets/die.png"
import Die1Img from "../assets/die1.png"
import Die2Img from "../assets/die2.png"

function ServicesMission() {
  return (
    <>
    <div className="dietary">
        <div className="dietary-t">
             <h1>Dietary Services</h1>
        </div>
        <div className="d-cards">

            <div className="d-card">
              <div className="d-img">
                     <img src={DieImg} alt="die" />
              </div>
              <div className="d-text">
                 <h4>Meal Plan #1</h4>
                 <p>Lorem ipsum dolor sit amet consectetur. <br /> Augue 
                    non malesuada placerat faucibus <br /> nam 
                    purus sem. Urna pulvinar porttitor <br />
                    dignissim congue pellentesque ac hac.
                     </p>
              </div>

            </div>

            <div className="d-card">
              <div className="d-img">
                     <img src={Die1Img} alt="die" />
              </div>
              <div className="d-text">
                 <h4>Meal Plan #2</h4>
                 <p>Lorem ipsum dolor sit amet consectetur. <br /> Augue 
                    non malesuada placerat faucibus <br /> nam 
                    purus sem. Urna pulvinar porttitor <br />
                    dignissim congue pellentesque ac hac.
                     </p>
              </div>

            </div>

            <div className="d-card">
              <div className="d-img">
                     <img src={Die2Img} alt="die" />
              </div>
              <div className="d-text">
                 <h4>Meal Plan #3</h4>
                 <p>Lorem ipsum dolor sit amet consectetur. <br /> Augue 
                    non malesuada placerat faucibus <br /> nam 
                    purus sem. Urna pulvinar porttitor <br />
                    dignissim congue pellentesque ac hac.
                     </p>
              </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default ServicesMission
