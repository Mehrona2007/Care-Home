import React from 'react'
import "./navbar.css"
import '../index.css'
import Header from './Header'
import homeImg from "../assets/home.png"
import ServicesCard from './ServicesCard'
import Mission from './Mission'
import Team from './Team'
import History from './History'
import Achievements from './Achievements'




function Home() {
  return (
    <>
    
      <Header
      title=""
      desc=""
      bgImage={homeImg}
      height="700px"
      />

      <ServicesCard/>

      <Mission/>
      <Team/>
      <History/>
      <Achievements/>

    
    </>
  )
}

export default Home
