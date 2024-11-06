import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './services.css'
import service1 from '../images/Services-1.svg'
import service2 from '../images/Services-2.svg'
import service3 from '../images/Services-3.svg'

const Services = () => {
  return (
    <div>
      <Header />
      <div className='service-section'>
        <div className='service-section-1'>
          <div>
            <img src={service1} alt="service1" />
          </div>
          <div>
            <h1>Imagine it. Build it. We make software dreams a reality.</h1>
            <p>We leverage cutting-edge technology to build solutions that thrive.</p>
            <button> Start Building Your Dream App</button>
          </div>
        </div>
        <div className='service-section-2'>
            <div>
              <h1>Ship with Confidence: Expert QA Testing for Flawless Software.</h1>
              <p>We identify and fix issues before they impact your users.</p>
              <button>Schedule a QA Consultation.</button>
            </div>
            <div>
              <img src={service2} alt="service2" />
            </div>
        </div>
        <div className='service-section-3'>
          <div>
            <img src={service3} alt="service3" />
          </div>
          <div>
            <h1>Vulnerability? No Way! Secure Your Software with Rigorous Testing.</h1>
            <p>Identify and fix security flaws before they become costly breaches.</p>
            <button>Get a Security Audit!</button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Services