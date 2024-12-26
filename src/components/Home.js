import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import home2 from '../images/Home-2.svg';
import home3 from '../images/Home-3.png';
import './home.css'

const Home = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Add fade-in animation to elements as they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <div className='software-services-section'>
        <h1 className='fade-in'>Discover our expert software services today</h1>
        <p className='fade-in'>We are a leading software technical company in Chennai providing development, QA, and security testing services.</p>
        <button 
          className='Explore-btn hover-scale'
          onClick={() => navigate('/services')}
        >
          Explore
        </button>
        <div className='stickercard-section'>
          {[
            {
              title: "Quality Assurance",
              desc: "Ship with Confidence: Expert QA Testing for Flawless Software"
            },
            {
              title: "Development",
              desc: "Turn your ideas into innovative software solutions, faster."
            },
            {
              title: "Security Testing",
              desc: "Protect your users' data and build trust with robust security testing."
            }
          ].map((card, index) => (
            <div 
              key={index}
              className='card hover-lift fade-in'
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='quality-service-section'>
        <div className='quality-info fade-in'>
          <h1>Quality Software Services</h1>
          <p>We are a Chennai-based software technical company offering development, QA, DevOps, security testing, and training services.</p>
        </div>
        <div className='quality-details-section'>
          <div className='quality-details-image fade-in'>
            <img src={home2} alt="home" className='hover-scale' />
          </div>
          <div className='quality-details'>
            {[
              {
                title: "DevOps Consulting Services",
                desc: "Streamline your development process with our expert DevOps consulting services."
              },
              {
                title: "Development Services for Businesses",
                desc: "Our team provides top-notch development services to help businesses thrive and succeed."
              },
              {
                title: "QA and Testing Solutions",
                desc: "Ensure the quality of your software with our comprehensive QA and testing solutions."
              }
            ].map((detail, index) => (
              <div 
                key={index}
                className='quality-details-info fade-in hover-lift'
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h2>{detail.title}</h2>
                <p>{detail.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='aboutus-section'>
        <div className='aboutus-details fade-in'>
          <h1>About Us</h1>
          <p>Welcome to Zan, a leading software technical company based in Chennai offering development, QA, DevOps, security testing, software products, and technical training services.</p>
        </div>
        <div className='aboutus-image fade-in'>
          <img src={home3} alt="home" className='hover-scale' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;