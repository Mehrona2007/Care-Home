import React from 'react'
import "./navbar.css"
import '../index.css'
import Header from './Header'
import servicesImg from "../assets/services.png"
import ServicesSection from './ServicesSection'
import ServicesMission from './ServicesMission'
import ServicesTeam from './ServicesTeam'





function Services() {
  return (
    <>
    <Header
    title=""
    desc=""
    bgImage={servicesImg}
    height="400px"
    />

    <ServicesSection/>
    <ServicesMission/>
    <ServicesTeam/>
    </>
  )
}

export default Services
