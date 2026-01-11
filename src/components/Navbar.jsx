
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./navbar.css"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar2">

      <div className="logo2">
        <h1>Care Home</h1>
      </div>

      <ul className={`menu2 ${open ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
        <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Amenities</Link></li>
        <li><Link to="/products" onClick={() => setOpen(false)}>Cost & Payment</Link></li>

        {/* Mobile button */}
        <li className="mobile-btn2">
          <button>Contact Us</button>
        </li>
      </ul>

      {/* Desktop button */}
      <div className="btn2">
        <button>Contact Us</button>
      </div>

      

      {/* Hamburger */}
      <div className="hamburger2" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  )
}

export default Navbar

