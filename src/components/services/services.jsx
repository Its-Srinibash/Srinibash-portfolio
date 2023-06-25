import React from 'react'
import "./services.css"
import {BiCheckShield} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Crafting intuitive UI and seamless UX for digital products.</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>User-centric design that enhances usability and engagement.</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Responsive designs for consistent usability across devices.</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Transforming client visions into impactful, functional designs.</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Incorporating user feedback to drive product enhancements and satisfaction.</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Designing delightful interactions that leave a lasting impression.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Tailored web development services for businesses and individuals.</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Front-end and back-end expertise for seamless functionality.</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Responsive, mobile-friendly websites with modern technologies.</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Dynamic web applications using frameworks like React .</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon'/>
              <p>Optimized performance for fast loading and smooth navigation.</p>
            </li>
          </ul>
        </article>
       
      </div>
    </section>
  )
}

export default services