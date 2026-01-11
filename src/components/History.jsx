import React from 'react'
import "./history.css"
import HistImg from "../assets/hist.png"

function History() {
  return (
   <>
   <section className="mission1">
   
           <div className="mission1-text">
              <h1>The Best Eldery Care Center For You</h1>
   
              <p>Lorem ipsum dolor sit amet consectetur. Augue non <br />
                 malesuada placerat faucibus nam purus sem. Urna pulvinar <br /> porttitor
                  dignissim congue pellentesque ac hac. Viverra donec <br /> nulla id
                   enim posuere done morbi dolor. 
                Eu adipiscing massa <br /> ut proin mauris orci tincidunt ac in.</p>

                <button className="learn-btn">Learn More</button>
           </div>
   
           <div className="mission1-img">
               <img src={HistImg} alt="hist" />
   
           </div>
       
       </section>

   </>
  )
}

export default History
