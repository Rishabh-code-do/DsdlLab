import React from 'react'
import Pdf from '../Assests/policy.pdf'
import "../Style/Download.css"

function Download() {
  return (
    <div>
      <a href={Pdf} target="_blank" className='link'>
        Read Policy
      </a>
    </div>
  )
}

export default Download;
