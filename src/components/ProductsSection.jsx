import React, { useState } from "react";
import "./ProductsSection.css";

function ProductsSection() {
  const [plan, setPlan] = useState("monthly");

  return (
    <section className="pricing">
      <h1>Payment Plans</h1>

      {/* Toggle */}
      <div className="toggle">
        <button
          className={plan === "monthly" ? "active" : ""}
          onClick={() => setPlan("monthly")}
        >
          Monthly
        </button>
        <button
          className={plan === "yearly" ? "active" : ""}
          onClick={() => setPlan("yearly")}
        >
          Yearly <span>Save 20%</span>
        </button>
      </div>

      {/* Cards */}
      <div className="pricing-cards">
        {/* BASIC */}
        <div className="card">
          <h4 className="label">BASIC</h4>

          <div className="line"></div>

          <h2>${plan === "monthly" ? "599" : "479"}</h2>
          <p>Per member, per Month</p>

          <div className="line"></div>


          <ul>
            <li>✔ Service Offering</li>
            <li>✔ Service Offering</li>
             <li>✔ Service Offering</li>
            <li className="no">✖ Service Offering</li>
            <li>✔ Service Offering</li>
            <li>✔ Service Offering</li>
             <li>✔ Service Offering</li>
              <li>✔ Service Offering</li>
               <li>✔ Service Offering</li>
          </ul>

          <button className="btn dark">Start free 14-day Trial</button>
          <small>No credit card required</small>
        </div>

        {/* PREMIUM */}
        <div className="card ">
          <span className="badge">Popular</span>
          <h4 className="label">PREMIUM</h4>

           <div className="line"></div>

          <h2>${plan === "monthly" ? "1299" : "1039"}</h2>
          <p>Per member, per Month</p>

          <div className="line"></div>

          <ul>
            <li>✔ Service Offering</li>
            <li>✔ Service Offering</li>
            <li>✔ Service Offering</li>
            <li>✔ Service Offering</li>
            <li>✔ Service Offering</li>
             <li>✔ Service Offering</li>
              <li>✔ Service Offering</li>
               <li>✔ Service Offering</li>
                <li>✔ Service Offering</li>
          </ul>

          <button className="btn dark">Start free 14-day Trial</button>
          <small>No credit card required</small>
        </div>

        {/* REGULAR */}
        <div className="card">
          <h4 className="label">REGULAR</h4>

           <div className="line"></div>

          <h2>${plan === "monthly" ? "1999" : "1599"}</h2>
          <p>Per member, per Month</p>

          <div className="line"></div>

          <ul>
            <li>✔ Service Offering</li>
            <li>✔ Service Offering</li>
             <li>✔ Service Offering</li>
              <li>✔ Service Offering</li>
               <li>✔ Service Offering</li>
            <li className="no">✖ Service Offering</li>
            <li>✔ Service Offering</li>
            <li>✔ Service Offering</li>
             <li>✔ Service Offering</li>
          </ul>

          <button className="btn dark">Start free 14-day Trial</button>
          <small>No credit card required</small>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
