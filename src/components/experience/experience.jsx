import React from 'react'
import './experience.css'
import {SiExpress} from 'react-icons/si'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {BsBootstrapFill} from 'react-icons/bs'
import {SiTailwindcss} from 'react-icons/si'

import {FaReact} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'

import {GrMysql} from 'react-icons/gr'
import {BiLogoPhp} from 'react-icons/bi'

import {FaNodeJs} from 'react-icons/fa'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
           < ImHtmlFive className='experience__details-icon'/>
           <div><h4>HTML</h4>
           <small className='text-light'>Experienced</small>
             </div>
           
            </article>
          
            <article className='experience__details'>
           < SiCss3 className='experience__details-icon'/>
           <div><h4>CSS</h4>
           <small className='text-light'>Intermediate</small>
             
            </div>
           </article>
            <article className='experience__details'>
           < IoLogoJavascript className='experience__details-icon'/>
           <div>
           <h4>JavaScript</h4>
           <small className='text-light'>Intermediate</small>
           </div>
            </article>
            <article className='experience__details'>
           < BsBootstrapFill className='experience__details-icon'/>
           <div><h4>Bootstrap</h4>
           <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
           < SiTailwindcss className='experience__details-icon'/>
          <div>  <h4>Tailwind</h4>
           <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
           < FaReact className='experience__details-icon'/>
           <div> <h4>React</h4>
           <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
           < SiMongodb className='experience__details-icon'/>
          <div>
          <h4>MongoDB</h4>
           <small className='text-light'>Intermediate</small>
            
             </div>
            </article>
          
            <article className='experience__details'>
           < GrMysql className='experience__details-icon'/>
          <div>
          <h4>MySQL</h4>
           <small className='text-light'>Intermediate</small>
             </div>  
            </article>
            <article className='experience__details'>
           < BiLogoPhp className='experience__details-icon'/>
          <div>
          <h4>PHP</h4>
           <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
           < FaNodeJs className='experience__details-icon'/>
          <div>
          <h4>Node JS</h4>
           <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
           < SiExpress className='experience__details-icon'/>
           <div>
           <h4>Express JS</h4>
           <small className='text-light'>Intermediate</small>
             </div>
            </article>
        
          </div>
          </div>
      </div>
    </section>
  )
}

export default experience