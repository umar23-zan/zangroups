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
            <h1>Contact us</h1>
            <p>Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you.</p>
            <h3>Email</h3>
            <p>info@zangroups.com</p>
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