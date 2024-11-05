import React from 'react'
import Header from './Header'
import Footer from './Footer';
import './home.css'
import home2 from '../images/Home-2.svg';
import home3 from '../images/Home-3.png'

const Home = () => {
  return (
    <div >
      <Header />
      <div className='software-services-section'>
            <h1 className=''>Discover our expert software services today</h1>
            <p>We are a leading software technical company in Chennai providing development, QA, and security testing services.</p>
            <button className='Explore-btn'>
              Explore
            </button>
            <div className='stickercard-section'>
              <div className='card'>
                  <h2>Qualtiy Assurance</h2>
                  <p>Ship with Confidence: Expert QA Testing for Flawless Software</p>
              </div>
              <div className='card'>
                  <h2>Development</h2>
                  <p>Turn your ideas into innovative software solutions, faster.</p>
              </div>
              <div className='card'>
                  <h2>Security Testing</h2>
                  <p>Protect your users' data and build trust with robust security testing.</p>
              </div>
          </div>
      </div>
        <div className='quality-service-section'>
            <div className='quality-info'>
              <h1>Quality Software Services</h1>
              <p>We are a Chennai-based software technical company offering development, QA, DevOps, security testing, and training services.</p>
            </div>  
            <div className='quality-details-section'>
            <div className='quality-details-image'>
              <img src={home2} alt="home" />
            </div>
            <div className='quality-details'>
                <div className='quality-details-info'>
                  <h2>DevOps Consulting Services</h2>
                  <p>Streamline your development process with our expert DevOps consulting services.</p>
                </div>
                <div className='quality-details-info'>
                  <h2>Development Services for Businesses</h2>
                  <p>Our team provides top-notch development services to help businesses thrive and succeed.</p>
                </div>
                <div className='quality-details-info'>
                  <h2>QA and Testing Solutions</h2>
                  <p>Ensure the quality of your software with our comprehensive QA and testing solutions.</p>
                </div>
            </div>
            </div>
            
        </div>
        <div className='aboutus-section'>
          <div className='aboutus-details'>
            <h1>About Us</h1>
            <p>Welcome to Zan, a leading software technical company based in Chennai offering development, QA, DevOps, security testing, software products, and technical training services.</p>
          </div>
          <div className='aboutus-image'>
            <img src={home3} alt="home" />
          </div>
        </div>
        <div className='Contactus-section'>
          <div className='Contactus-details-section'>
            <div className='Contactus-details'>
              <h1>Contact Us for Software Services</h1>
              <p>Get in touch with ZAN, a Chennai-based software technical company offering development, QA, DevOps, security testing, software products, and technical training services.</p>
            </div>
            <div className='Contactus-email'>
              <h3>Email</h3>
              <p>info@zangroups.com</p>
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
        <Footer />
      </div>
  )
}

export default Home