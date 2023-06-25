import React, { useRef } from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xb04i6l', 'template_warewbj', form.current, '8wg--ZyINBOCJcoZ3')
     e.target.reset()
     alert("Mail Sent Successfully")
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>srinibashmohanty2002@gmail.com</h5>
            <a href="mailto:srinibashmohanty2002@gmail.com" target='_blank'>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Srinibash Mohanty</h5>
            <a href="https://www.linkedin.com/in/srinibash-mohanty-09b2341a9/" target='_blank'>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8112180800</h5>
            <a href="https://api.whatsapp.com/send?phone=8112180800" target='_blank'>
              Send a message
            </a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact