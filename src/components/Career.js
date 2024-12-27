import React from 'react'
import Header from './Header'
import Footer from './Footer'
import backgroundvideo from '../images/careers-1.mp4'
import './career.css'

const Career = () => {
  return (
    <div className="career-container">
      <Header />
      <video src={backgroundvideo} loop autoPlay muted id='bg-video'></video>
      <div className='career-info'>
        <h1>Join the Band</h1>
        <p>Career@zansphere.com</p>
      </div>
      <Footer />
    </div>
  )
}

export default Career