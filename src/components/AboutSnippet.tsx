import React from 'react';
import './AboutSnippet.css';
import Button from './Button';

const AboutSnippet: React.FC = () => {
  return (
    <section className="about-snippet section-padding">
      <div className="container about-snippet-container">
        <div className="about-snippet-content scroll-reveal active">
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="section-heading">We Combine Expertise, Innovation, and Dedication</h2>
          <p className="section-body">
            Al SAND was founded with a single mission: to provide trustworthy, 
            high-quality renovation and maintenance solutions across the UAE. 
            Our certified team of technicians, electricians, plumbers, carpenters, 
            and AC specialists uses advanced equipment and premium materials to 
            deliver results that stand the test of time.
          </p>
          <p className="section-body">
            We build lasting partnerships through honest pricing, responsive 
            service, and work quality that consistently exceeds expectations.
          </p>
          <Button variant="outline" className="about-cta" href="/about">
            Learn More About Us
          </Button>
        </div>
        <div className="about-snippet-image scroll-reveal active">
          <img src="/assets/images/about-team.png" alt="Our Expert Team" className="about-img hover-lift" />
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
