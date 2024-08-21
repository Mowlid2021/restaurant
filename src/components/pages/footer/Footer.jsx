import React from 'react'
import "./Footer.css"
import { FaGithub, FaInstagram, FaTelegram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { BiArrowToTop } from 'react-icons/bi'
import { BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

function Footer() {

  // Function to handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  };

  return (
    <div className='footer'>

        <div className="left">
            
            <section className='first-items'>
                <span>
                  <h3 className='mow'>Mow</h3> <h3 className='liid'>liid</h3>
                </span>
                <h3>About Us</h3>
                  <p>dadaalkeena waa inaan wax badan kafahantig suuqa onlinke wax looga iibsado ee digital market ka ah</p>
                  <p>waxa aan xooga saareyno waa sidii add ufahmi lahayd sida ay ushaqeeyaan alaabaha lagu iibiyo internetka gudihiisa misna laguugu adeegaayo si casri ah oo online ah</p>
            </section>

            <section>
                <div className="seccond-items">
                  <a href="https://t.me/mowlidcalisiidow"><FaTelegram/></a>
                  <a href="#"> <FaGithub /></a>
                  <a href="https://www.tiktok.com/@iisahalcoding?_t=8p3FZd3mPpu&_r=1"><FaTiktok/></a>
                  <a href="https://youtube.com/@iisahalcoding?si=y8_zmyu7Gv9roh9z"><BsYoutube/></a>
                  <a href="https://www.iisahal@gmail.com"><GoMail /></a>
                </div>
            </section>
        </div>

        <div className='right'>

            <section className='first-items'>
                <h3>Copyright ©  2024 <a href="https://www.iisahalcoding.com"> Mowlid Cali Siidow</a></h3>
                <p>Soosaaristii - Mowlid Cali Siidow</p>
            </section>
            <section className='seccond-items'>
               <NavLink to="/"> Home</NavLink>
               <NavLink to="products"> Cun ama Cab</NavLink>
               <NavLink to="/about"> About</NavLink>
            </section>
            <button onClick={handleScrollToTop}><BiArrowToTop /></button> {/*button ka add top*/}
        </div>

    </div>
  )
}

export default Footer
