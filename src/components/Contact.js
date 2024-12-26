import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  return (
    <div>
      <Header />
      <div className='contact-section'>
        <div>
          <div className='Contactus-section'>
            <div className='Contactus-details-section fade-in'>
              <div className='Contactus-details'>
                <h1 className='animated-title'>Contact Us for Software Services</h1>
                <p>Get in touch with ZAN, a Chennai-based software technical company offering development, QA, DevOps, security testing, software products, and technical training services.</p>
              </div>
              <div className='Contactus-email hover-card'>
                <h3>Email</h3>
                <p>info@zansphere.com</p>
              </div>
            </div>

            <form className='form-section fade-in' onSubmit={handleSubmit}>
              <div className='input-group'>
                <label>Enter your first name here</label>
                <input 
                  type="text"
                  name="name"
                  placeholder='Type your first name'
                  className='animated-input'
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className='input-group'>
                <label>Enter your email address here*</label>
                <input 
                  type="email"
                  name="email"
                  placeholder='Type your email address'
                  className='animated-input'
                  required
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className='input-group'>
                <label>Enter your message here</label>
                <textarea 
                  className='message-container animated-input'
                  name="message"
                  placeholder='Type your Message'
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button type='submit' className='submit-button'>
                <span>Submit your form here</span>
                <div className='button-glow'></div>
              </button>

              {submitted && (
                <div className='success-message fade-in'>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className='address-section hover-card fade-in'>
            <h3>Address</h3>
            <p>Alwarpet, Chennai.</p>
          </div>
          
          <div className='socialmedia-section fade-in'>
            <div>
              <p><strong>Follow us</strong></p>
            </div>
            <div className='socialmedia-icons'>
              {[
                { icon: facebook, name: 'facebook' },
                { icon: instagram, name: 'instagram' },
                { icon: linkedin, name: 'linkedin' },
                { icon: twitter, name: 'twitter' }
              ].map((social, index) => (
                <div 
                  key={social.name}
                  className='social-icon-wrapper'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className='social-icon'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;