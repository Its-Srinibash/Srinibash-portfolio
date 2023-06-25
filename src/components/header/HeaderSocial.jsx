import React from 'react'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
     <a href="https://www.linkedin.com/in/srinibash-mohanty-09b2341a9/" target='_blank'><BiLogoLinkedinSquare/></a>
     <a href="https://github.com/Its-Srinibash" target='_blank'><BsGithub/></a>
     {/* <a href="https://dribbble.com" target='_blank'><FaDribbbleSquare/></a> */}
    </div>
  )
}

export default HeaderSocial