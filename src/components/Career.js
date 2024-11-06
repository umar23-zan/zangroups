import React from 'react'
import Header from './Header'
import Footer from './Footer'
import backgroundvideo from '../images/careers-1.mp4';
import './career.css'


const Career = () => {
  return (
    <div>
      <video src={backgroundvideo} loop autoPlay muted id='bg-video'></video>
      <Header />
      <div className='career-info'>
        <h1>Join the Band</h1>
        <p>Career@zangroups.com</p>
      </div>
      <Footer />
    </div>
  )
}

export default Career