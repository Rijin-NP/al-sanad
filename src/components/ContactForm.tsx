import React from 'react';
import './ContactForm.css';
import Button from './Button';

const ContactForm: React.FC = () => {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-eyebrow">Contact Us</span>
            <h2 className="section-heading">Let's Talk…</h2>
            <p className="section-subheading">
              Looking for a trusted home and office maintenance company in the UAE?
              Your solution is just one message away.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <span className="info-label">Phone</span>
                <a href="tel:+971566069542" className="info-value">+971 56 606 9542</a>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <a href="mailto:alsanadts26@gmail.com" className="info-value">alsanadts26@gmail.com</a>
              </div>
              <div className="info-item">
                <span className="info-label">Address</span>
                <span className="info-value">Dubai, United Arab Emirates</span>
              </div>
              <div className="info-item">
                <span className="info-label">Hours</span>
                <span className="info-value">Mon – Sat: 8:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form 
              className="contact-form" 
              action="https://formspree.io/f/your-form-id" 
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="full_name">Full Name</label>
                <input type="text" id="full_name" name="name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service" required>
                  <option value="">Select a Service</option>
                  <option value="ac">AC Services</option>
                  <option value="renovation">Renovation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="How can we help you?" required></textarea>
              </div>
              <Button variant="solid" type="submit" className="submit-btn gold-shimmer">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="map-container scroll-reveal active">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115507.21556942411!2d55.122176840733!3d25.182046487859842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e508d59a0fa!2sDubai!5e0!3m2!1sen!2sae!4v1711100000000!5m2!1sen!2sae" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Al SAND Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
