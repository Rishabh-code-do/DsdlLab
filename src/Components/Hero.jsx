import React from 'react'
import "../Style/Hero.css"
import Download from './Download'

const Hero = () => {
  return (
    <>
     <div className='hero'>
       <p className='font1'>"Unleasing Power Where Supercomputing Transcends Boundaries and Innovates."</p>
       <p className='font2'>☆ Welcome to DSDL Lab</p>
       <p className='font3'>DSDL Club Offers cutting-edge supercomputer access for brilliant minds.<br></br>Open to all, including alumini and external researchers.Empowering innovation and collabration beyond boundaries.<br></br>Join Us for limited possibilites.</p>
       <div className='btn'>
        <button className='Button'><a href="https://forms.gle/W5R5fumbwWynGMmr9" target='_blank'>Request Access</a></button>
        <button className='Button'><Download/></button>
       </div>
       <br></br>
       <br></br>
       <br></br>
       <br className='none'></br>
       <br className='none'></br>
       <br className='none'></br>
     </div>
    </>
  )
}

export default Hero