import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import service1 from '../images/Services-1.svg';
import service2 from '../images/Services-2.svg';
import service3 from '../images/Services-3.svg';
import './services.css'

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with slide-in class
    document.querySelectorAll('.slide-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <div className='service-section'>
        <div className='service-section-1'>
          <div className='slide-in slide-left'>
            <img src={service1} alt="service1" className="service-image" />
          </div>
          <div className='slide-in slide-right'>
            <h1>Imagine it. Build it. We make software dreams a reality.</h1>
            <p>We leverage cutting-edge technology to build solutions that thrive.</p>
            <button className="animated-button" onClick={() => {navigate('/contact')}}>
              Start Building Your Dream App
              <span className="button-shine"></span>
            </button>
          </div>
        </div>

        <div className='service-section-2'>
          <div className='slide-in slide-left'>
            <h1>Ship with Confidence: Expert QA Testing for Flawless Software.</h1>
            <p>We identify and fix issues before they impact your users.</p>
            <button 
              className="animated-button"
              onClick={() => navigate('/contact')}
            >
              Schedule a QA Consultation
              <span className="button-shine"></span>
            </button>
          </div>
          <div className='slide-in slide-right'>
            <img src={service2} alt="service2" className="service-image" />
          </div>
        </div>

        <div className='service-section-3'>
          <div className='slide-in slide-left'>
            <img src={service3} alt="service3" className="service-image" />
          </div>
          <div className='slide-in slide-right'>
            <h1>Vulnerability? No Way! Secure Your Software with Rigorous Testing.</h1>
            <p>Identify and fix security flaws before they become costly breaches.</p>
            <button className="animated-button" onClick={() => {navigate('/contact')}}>
              Get a Security Audit!
              <span className="button-shine"></span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;