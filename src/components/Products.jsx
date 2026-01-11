import React from 'react'
import "./navbar.css"
import '../index.css'
import productImg from "../assets/products.png"
import Header from './Header'
import ProductsMission from './ProductsMission'
import PreductsTeam from './PreductsTeam'
import ProductsSection from './ProductsSection'

function Products() {
  return (
    <>
    <Header
    title=""
    desc=""
    bgImage={productImg}
    height="400px"
    />

    <ProductsSection/>

    <ProductsMission/>
    <PreductsTeam/>
   
    </>
  )
}

export default Products
