import React from 'react'
import "../Style/FaculityMentors.css"
import SK from "../Assests/SK.png"
import GP from "../Assests/GP.png"

const FaculityMentors = () => {
  return (
    <>
    <div className='fm'>
    <h4>Our Faculty Mentors</h4>
    <div className='mentor'>
        <div className='cont'>
        <img src={SK} alt="SK" />
        <p className='para'>Dr. Sushil Kumar<br></br>
        Associate Professor Department of Computer Science & Engineering<br></br>
        Email Id :- sushil.kumar@kiet.edu</p>
        </div>
        <div className='cont'>
        <img src={GP} alt="GP" />
        <p className='para'>
        Mr. Gaurav Parashar<br></br>
        Assistant Professor Department of Computer Science & Engineering<br></br>
        Email Id :- gaurav.parashar@kiet.edu
        </p>
        </div>
    </div>
    </div>
    <div className='stage'>
        <div className='stg1'>
        <div className='stages1'>Stage 1</div>
        <h2>Objective</h2>
        <p>This document lays out the policy for the operation of the supercomputer system Access that maintained and operated by the DSDL CLUB and for selecting projects</p>
        </div>
        <div className='stg2'>
        <div className='stages2'>Stage 2</div>
        <h2>User Eligibilty</h2>
        <p>An individual who collaborates with a supervisor(s) on any research and development project.</p>
        </div>
    </div>
    </>
  )
}

export default FaculityMentors