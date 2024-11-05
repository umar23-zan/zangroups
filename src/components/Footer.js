import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-info'>
        <div className='footer-details'>
          <h1>Services</h1>
          <p>We offer development, QA, DevOps, security testing services.</p>
        </div>
        <div className='footer-form'>
        <label >Enter your email address here</label>
        <input type="email" placeholder='example@gmail.com'/>
        <button type='submit'>Submit</button>
      </div>
      </div>
      
      <div className='copyright'><p>© 2024. All rights reserved.</p></div>
    </div>
  )
}

export default Footer