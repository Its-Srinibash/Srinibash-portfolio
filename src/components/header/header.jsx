import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/s1.png'
import HeaderSocial from './HeaderSocial'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
const header = () => {
  return (
    <header>
         <div className='container header__container'>
           <h5>Hello I'm</h5>
           <h1>Srinibash Mohanty</h1>
           <h5 className='text-light'>Fullstack Developer</h5>
          <CTA/>
       <HeaderSocial/>
          <div className="me ">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'><BsFillArrowDownCircleFill/></a>
         </div>

    </header>
  )
}

export default header