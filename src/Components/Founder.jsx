import React from 'react'
import "../Style/FaculityMentors.css"
import SK from "../Assests/SK.png"
import GP from "../Assests/GP.png"
function Founder() {
  return (
    <>
      <div className='fm'>
    <h4>Founder</h4>
    <div className='mentor cen'>
        <div className='cont1'>
        <img src={GP} alt="GP" className='img1'/>
        <p className='para'>
        Mr. Gaurav Parashar<br></br>
        Assistant Professor<br></br> Department of Computer Science & Engineering<br></br>
        <span className='email'>Email Id :- gaurav.parashar@kiet.edu</span>
        </p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Founder
