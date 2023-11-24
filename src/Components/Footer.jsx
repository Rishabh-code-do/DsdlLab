import React from 'react'
import "../Style/Footer.css"
import { BsLinkedin, BsInstagram, BsDiscord} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='ft1'>
        <p>DsdlLab</p>
        <p>We growing up your research and development with Paramshavak.</p>
        <p>DsdlLab, 2023.</p>
        </div>
        <h6><span>Ping Us On</span></h6>
        <div className='handles'>
        <a href='https://www.linkedin.com/company/dsdl-club/'><BsLinkedin /></a>
        <a href='https://www.instagram.com/dsdl_club/'><BsInstagram /></a>
        <a href='https://discord.com/invite/m98qww4W'><BsDiscord /></a>
        <a href='mailto:dsdl@gmail.com'><SiGmail /></a>
        </div>
        <div className='ft2'>
        <p>© 2023 DsdlLab.All rights reserved.</p>
        <p className='values'><span>Terms of Service</span><span> Privacy Policy</span> <span>Cookies</span></p>
        </div>
    </div>
    </>
  )
}

export default Footer
