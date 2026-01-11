import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
   <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>

    <Footer/>
      
    </>
  )
}

export default App
