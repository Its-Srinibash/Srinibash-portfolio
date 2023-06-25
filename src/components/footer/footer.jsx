import React from 'react'
import './footer.css'
import {AiOutlineTwitter} from "react-icons/ai"
import {FaInstagram} from "react-icons/fa"
import {BiLogoLinkedinSquare} from "react-icons/bi"
const footer = () => {
  return (
    <footer>
   
      <ul className='permalinks'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/srinibash-mohanty-09b2341a9/" target='_blank'>
      <BiLogoLinkedinSquare/>
        </a>
        <a href="https://www.instagram.com/its_srinibash_/" target='_blank'>
          <FaInstagram/>
        </a>
        <a href="https://twitter.com/SrinibashMoha17" target='_blank'>
        <AiOutlineTwitter/>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Srinibash Mohanty, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer