import React, { useRef, useState } from "react";
import "./testimonials.css"
import IMG1 from '../../assets/me.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


const data=[
  {
    avatar:IMG1,
    cname:"client Name",
    review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus velit iste modi obcaecati impedit, sit expedita saepe maxime totam."
  },
  {
    avatar:IMG1,
    cname:"client Name",
    review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus velit iste modi obcaecati impedit, sit expedita saepe maxime totam."
  },
  {
    avatar:IMG1,
    cname:"client Name",
    review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus velit iste modi obcaecati impedit, sit expedita saepe maxime totam."
  },
  {
    avatar:IMG1,
    cname:"client Name",
    review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus velit iste modi obcaecati impedit, sit expedita saepe maxime totam."
  },
  {
    avatar:IMG1,
    cname:"client Name",
    review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus velit iste modi obcaecati impedit, sit expedita saepe maxime totam."
  },
]



const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{clickable:true}}
      >
       
        {
          data.map(({avatar,cname,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
               
              </div>
              <h5>{cname}</h5>
                <small className='client__review'>{review}</small>
    
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials