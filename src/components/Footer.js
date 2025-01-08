import React, { useState } from 'react';
import './footer.css'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:50001/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setEmail('');
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      alert('Unable to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="footer-section">
    <div className="footer-container">
      <div className="footer-info">
        <div className="footer-details">
          <div className="footer-details-div">
            <h1>Services</h1>
            <p>We offer development, QA, DevOps, security testing services.</p>
          </div>
        </div>
        <div className="footer-form">
          <form onSubmit={handleNewsletterSubmit}>
            <div className="footer-form-details">
              <label>Enter your email address here</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>© 2024. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer