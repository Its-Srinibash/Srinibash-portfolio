import React, { useState } from 'react';
import "./nav.css";
import { AiTwotoneHome } from 'react-icons/ai';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { BiSolidBook } from 'react-icons/bi';
import { RiServiceFill } from 'react-icons/ri';
import { MdCall } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><BiSolidUserRectangle /></a>
      <a href="#experience"  onClick={()=>setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><BiSolidBook /></a>
      <a href="#services" onClick={()=>setActiveNav('#services')}className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><MdCall /></a>
    </nav>
  );
};

export default Nav;
