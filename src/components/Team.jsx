import React from 'react';
import "./team.css";
import jemisImg from "../assets/jemis.png";

function Team() {
  return (
    <div className="client">
      <h1>Client Reviews</h1>

      <div className="client-card">
        <p>
          "<span>
            Lorem ipsum dolor sit amet consectetur. Amet sed tellus 
            elementum mauris. Libero maecenas eget tellus morbi diam enim
            euismod egestas. Adipiscing fringilla quis justo adipiscing
            eget aenean sollicitudin. Nibh ut sed sodales magna risus
            tellus. Nulla ut arcu ac justo blandit tincidunt ante.
            Tincidunt libero urna ut
            aliquet vitae nunc quisque sapien cursus.
          </span>"
        </p>

        <div className="client-info">
          <img src={jemisImg} alt="jemis" />
          <div className="client-text">
            <h4>James Smith</h4>
            <span>ABC Softwares</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
