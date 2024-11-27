import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-info'>
        <div className='footer-details'>
          <div className='footer-details-div'>
            <h1>Services</h1>
            <p>We offer development, QA, DevOps, security testing services.</p>
          </div>
        </div>
        <div className='footer-form'>
        <div className='footer-form-details'>
          <label >Enter your email address here</label>
          <input type="email" placeholder='example@gmail.com'/>
          <button type='submit'>Submit</button>
        </div>
      </div>
      </div>
      <div className='copyright'>
          <p>© 2024. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer