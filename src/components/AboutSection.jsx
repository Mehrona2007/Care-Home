import React from "react";
import "./aboutSection.css"
import aboutImg from "../assets/abou.png"

function AboutSection() {
  return (
    <section className="mission">

        <div className="mission-text">
           <h1>Mission Statement</h1>

           <p>Lorem ipsum dolor sit amet consectetur. Augue non <br />
             malesuada placerat faucibus nam purus sem. Urna pulvinar <br /> porttitor
              dignissim congue pellentesque ac hac. Viverra donec  <br /> nulla id enim
               posuere donec morbi dolor. 
            Eu adipiscing massa <br /> ut proin mauris orci tincidunt ac in.</p>
        </div>

        <div className="mission-img">
            <img src={aboutImg} alt="abou" />

        </div>
    
    </section>
  );
}

export default AboutSection;
