import React from 'react'
import './about.css'
import ME from '../../assets/Srini3.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {LuFolders} from 'react-icons/lu'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ year of experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3 clients</small>
            </article>

            <article className='about__card'>
              <LuFolders className='about__icon'/>
              <h5>Projects</h5>
              <small>20 Completed</small>
            </article>
          </div>
          <p>I'm Srinibash Mohanty, a passionate website developer with expertise in HTML, CSS, JavaScript, React JS, Node JS, Express JS, and MongoDB. I create user-friendly interfaces and deliver high-quality projects. I have experience working at VidyalayClasses and have completed my B.Tech in Computer Science Engineering. Let's build innovative web solutions together!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
 
        </div>
      </div>
    </section>
  )
}

export default About