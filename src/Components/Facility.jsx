import React from 'react'
import "../Style/Facility.css"
import Motherboard from "../Assests/motherboard.png"
import Ram from "../Assests/ram.png"
import Nvidia from "../Assests/nvidia.png"
import Cpu from "../Assests/cpu.png"
import Chatbot from "../Assests/chatbot.png"


const Facility = () => {
  return (
    <div className='facility'>
        <h1 className='heading'>Facility</h1>
        <p className='heading'>PARAM SHAVAK-Supercomputer Specifications And Features</p>
      <div className='fac'>
        <div className='cont'>
        <img src={Ram} alt="RAM" />
        <p>96GB RAM & 16TB ROM</p>
        </div>
        <div className='cont'>
        <img src={Motherboard} alt="MOTHERBOARD" />
        <p>MotherBoard</p>
        </div>
        <div className='cont'>
        <img src={Nvidia} alt="NVIDIA" />
        <p>Nvidia Quadro RTX</p>
        </div>
        <div className='cont'>
        <img src={Cpu} alt="PROCESSOR" />
        <p>Intel® Xeon® Gold 6145Processor</p>
        </div>
        <img src={Chatbot} alt="CHATBOT" className='chatbot'/>
     </div>
    </div>
  )
}

export default Facility