import React from "react";
import "./aboutMission.css";

const AboutMission = () => {
  return (
    <section className="about-mission">
      <h2 className="mission-title">History of the home</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-year">1990</div>
          <div className="timeline-content">
            <span className="dot"></span>
            <h3>New Beginning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
               placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue 
               pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor.
                Eu adipiscing massa ut proin mauris orci tincidunt ac in. 
              Augue non malesuada placerat faucibus nam purus sem.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2000</div>
          <div className="timeline-content">
            <span className="dot"></span>
            <h3>Residence Expand</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
               placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
                congue pellentesque ac hac. Viverra donec nulla id enim posuere donec 
                morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. 
              Augue non malesuada placerat faucibus nam purus sem.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2010</div>
          <div className="timeline-content">
            <span className="dot"></span>
            <h3>Home Care Service Started</h3>
            <p>
             Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor 
              dignissim congue pellentesque ac hac. Viverra donec nulla id
               enim posuere donec morbi dolor. Eu adipiscing massa ut proin 
               mauris orci tincidunt ac in.
              Augue non malesuada placerat faucibus nam purus sem.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2020</div>
          <div className="timeline-content">
            <span className="dot"></span>
            <h3>Country Wide Coverage</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
               placerat faucibus nam purus sem. Urna pulvinar porttitor
                dignissim  congue pellentesque ac hac. Viverra donec nulla
                 id enim posuere donec morbi dolor. Eu adipiscing massa ut 
                 proin mauris orci tincidunt ac  in.
               Augue non malesuada placerat faucibus nam purus sem.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMission;
