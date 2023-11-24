import React from 'react'
import "../Style/FaculityMentors.css"
import VS from "../Assests/C02FCFB7-F08A-4237-BFFA-1732FE34608F.jpeg"
function Founder() {
  return (
    <>
      <div className='fm'>
    <h4>Founder</h4>
    <div className='mentor cen'>
        <div className='cont1'>
        <img src={VS} alt="GP" className='img1'/>
        <p className='para'>
        Dr. Vineet Sharma<br></br>
        Head of Department(HOD)<br></br> Department of Computer Science & Engineering<br></br>
        <span className='email'>Email Id :- vineet.sharma@kiet.edu</span>
        </p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Founder
