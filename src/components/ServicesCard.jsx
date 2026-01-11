import React from 'react'
import './servicesCard.css'
import servImg from "../assets/serv.png"

function ServicesCard() {
  return (
    <>
    <section className='services'>
        <div className="services-img">
       <img src={servImg} alt="service" />
        </div>
        <div className="services-text">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Augue non <br />
             malesuada placerat faucibus nam purus sem. Urna pulvinar <br />
              porttitor dignissim congue pellentesque ac hac. </p>

              <ul className="check-list">
  <li>Lorem ipsum dolor sit amet consectetur. </li>
  <li>Augue non malesuada placerat faucibus nam purus sem.</li>
  <li>Urna pulvinar porttitor dignissim congue pellentesque ac hac.</li>
  <li>Eu adipiscing massa ut proin mauris orci tincidunt ac in.</li>
</ul>

  <button className="learn-btn">Learn More</button>

            
        </div>
    </section>
    </>
  )
}

export default ServicesCard
