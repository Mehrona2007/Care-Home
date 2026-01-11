import React from 'react'
import "./navbar.css"
import '../index.css'
import contactImg from "../assets/contact.png"
import Header from './Header'
import ContactSection from './ContactSection'
import ContactMission from './ContactMission'
import ContactTeam from './ContactTeam'
import ContactHistory from './ContactHistory'

function Contact() {
  return (
   <>
   <Header
   title=""
   desc=""
   bgImage={contactImg}
   height="400px"
   />
   <ContactSection/>
   <ContactMission/>
   <ContactTeam/>
   <ContactHistory/>

   
   </>
  )
}

export default Contact
