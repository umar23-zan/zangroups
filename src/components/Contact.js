import React from 'react'
import Header from './Header'
import Footer from './Footer'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import './contact.css'


const Contact = () => {
  return (
    <div>
      <Header />
      <div className='contact-section'>
          <div>
          <div className='Contactus-section'>
          <div className='Contactus-details-section'>
            <div className='Contactus-details'>
              <h1>Contact Us for Software Services</h1>
              <p>Get in touch with ZAN, a Chennai-based software technical company offering development, QA, DevOps, security testing, software products, and technical training services.</p>
            </div>
            <div className='Contactus-email'>
              <h3>Email</h3>
              <p>info@zansphere.com</p>
            </div>
          </div>
          
            <form className='form-section' action="submit">
            <label>Enter your first name here</label>
            <input type="name" name="name" placeholder='Type your first name'/>
            <label>Enter your email address here*</label>
            <input type="email" name="email" placeholder='Type your email address'/>
            <label>Enter your message here</label>
            <input className='message-container' type="text" name="message" placeholder='Type your Message'/>
            <button type='submit'>
              Submit your form here
            </button>
            </form>
          
        </div>
            <h3>Address</h3>
            <p>Alwarpet, Chennai.</p>
          </div>
          <div className='socialmedia-section'>
              <div><p><strong>Follow us</strong></p></div>
              <div className='socialmedia-icons'>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="insta" />
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
              </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact