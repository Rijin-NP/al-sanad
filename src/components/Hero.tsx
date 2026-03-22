import React from 'react';
import './Hero.css';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video"
        poster="/assets/images/hero-poster.png"
      >
        <source src="/assets/videos/al-sand-work-reel.mp4" type="video/mp4" />
      </video>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">Excellence in Every Detail</span>
          <h1 className="hero-heading">
            Premium Renovation & <span className="gold-gradient-text">Maintenance Services</span>
          </h1>
          <p className="hero-subheading">
            Al SAND delivers world-class craftsmanship for homes, villas,
            and offices across the UAE — on time, on budget, beyond expectation.
          </p>
          <div className="hero-actions">
            <Button variant="solid" className="hero-cta" href="/#services">
              Explore Our Services
            </Button>
            <Button variant="outline" className="hero-cta" href="tel:+971566069542">
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
