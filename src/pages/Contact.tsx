import React from 'react';
import SEO from '../components/SEO';
import './Contact.css';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Al SAND for your renovation and maintenance needs. We offer free quotes and professional advice across Dubai and the UAE."
        canonical="/contact"
      />
      <section className="page-hero section-padding">
        <div className="container">
          <span className="section-eyebrow">Get In Touch</span>
          <h1 className="gold-gradient-text">Contact Al SAND</h1>
        </div>
      </section>

      <div className="contact-page-content">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
