import React from 'react'
import "../Style/Navbar.css"
import Download from './Download'

const Navbar = () => {
  return (
     <div className='nav'>
        <h1>DSDL<span className='lab'>LAB</span></h1>
         <div className='nav1'>
            <a href="#Dashboard">Dashboard</a>
            <p>Facility</p>
            <p>Mentors</p>
            <p>FAQs</p>
            <Download/>
         </div>
         <div className='button'>
            <button className='Button1'>Sign In</button>
            <button className='Button2'>Sign Up</button>
         </div>
     </div>
  )
}

export default Navbar