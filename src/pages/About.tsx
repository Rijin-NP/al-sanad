import React from 'react';
import SEO from '../components/SEO';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <SEO 
        title="About Us" 
        description="Learn more about Al SAND, our mission, vision, and our commitment to excellence in property maintenance and renovation across the Middle East."
        canonical="/about"
      />
      <section className="page-hero section-padding">
        <div className="container">
          <span className="section-eyebrow">About Us</span>
          <h1 className="gold-gradient-text">Excellence, Innovation, Dedication</h1>
        </div>
      </section>

      <section className="mission-vision section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2 className="about-heading">Our Mission</h2>
              <p>
                To deliver trustworthy, world-class renovation and maintenance
                solutions that improve lives and properties across the UAE.
              </p>
            </div>
            <div className="about-card">
              <h2 className="about-heading">Our Vision</h2>
              <p>
                To be the most respected and reliable property services brand
                in the Middle East, known for uncompromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="local-expertise section-padding bg-alt">
        <div className="container">
          <div className="about-grid reverse">
            <div className="about-image">
              <img src="/assets/images/about-team.png" alt="Local UAE Experts" className="about-img hover-lift" />
            </div>
            <div className="about-content">
              <span className="section-eyebrow">Local Insight</span>
              <h2 className="section-heading">Deeply Rooted in the UAE</h2>
              <p className="section-body">
                With over a decade of experience serving Dubai, Abu Dhabi, Sharjah, 
                and all other Emirates, Al SAND understands the unique maintenance 
                needs of properties in the region — from climate-specific AC 
                solutions to premium villa renovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications section-padding">
        <div className="container text-center">
          <h2 className="section-heading">Our Certifications</h2>
          <p className="section-subheading">
            We are proud to be certified and approved by major UAE authorities, 
            guaranteeing safety and quality in every project we undertake.
          </p>
          <div className="cert-grid">
            <img src="/assets/images/certifications-badges.png" alt="Trust Badges" className="cert-badges-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
