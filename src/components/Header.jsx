import React from 'react'

function Header({title, desc, bgImage, height}) {


  return (
    <>
    <div className='header'
    style={{
        height: height, // 👈 har page’dan keladi
        backgroundImage:`url(${bgImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        color:"#fff",
    }}>

        <h1>{title}</h1>

        <p>{desc}</p>

    </div>
    </>
  )
}

export default Header
