import React from 'react'
import "./navbar.css"
import '../index.css'
import aboutImg from "../assets/about.png"
import Header from './Header'
import AboutSection from './AboutSection'
import AboutMission from './AboutMission'
import AboutTeam from './AboutTeam'




function About() {
  return (
   <>
   <Header
   title=""
   desc=""
   bgImage={aboutImg}
   height="380px"
   />

   <AboutSection/>
   <AboutMission/>
   <AboutTeam/>
   
   </>
  )
}

export default About
