import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/smartBooking.jpeg'
import IMG2 from '../../assets/vidyalayClasses.jpg'
import IMG4 from '../../assets/portfolio.jpg'
import IMG3 from '../../assets/snake.jpg'

import IMG5 from '../../assets/pizza.jpg'
const data =[
  {
    id:1,
    image:IMG1,
    title:"SmartBooking",
    github:'https://github.com/Its-Srinibash/Smart-Booking',
    demo:'https://github.com/Its-Srinibash/Smart-Booking'

  },
  {
    id:2,
    image:IMG4,
    title:"Portfolio",
    github:'https://github.com/Its-Srinibash/Srinibash-portfolio',
    demo:'https://srinibashmohanty.netlify.app/'

  },
  {
    id:3,
    image:IMG5,
    title:"PiZZA Shop ",
    github:'https://github.com/Its-Srinibash/pizzaApp/tree/main',
    demo:'https://srinupizza.netlify.app/'

  },
 
  {
    id:4,
    image:IMG2,
    title:"VidyalayClasses",
    github:'https://github.com/Its-Srinibash/Vidyalay',
    demo:'https://its-srinibash.github.io/Vidyalay/'

  },
  {
    id:5,
    image:IMG3,
    title:"Snake Game",
    github:'https://github.com/Its-Srinibash/Snake',
    demo:' https://its-srinibash.github.io/Snake/'

   },
  
  // {
  //   id:6,
  //   image:IMG1,
  //   title:"Title of Project",
  //   github:'https://github.com',
  //   demo:'https://github.com'

  // },
]
const portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo})=>{
        return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image"> <img src={image} alt={title} /> </div>
            <h3>{title}</h3>
         <div className="portfolio__item-cta">
         <a href={github}className='btn' target='_blank'>Github</a>
            <a href={demo}className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        )
        })
        }
        
      </div>
    </section>
  )
}

export default portfolio