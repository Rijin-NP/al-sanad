import React from 'react';
import './FullWidthCTA.css';
import Button from './Button';

const FullWidthCTA: React.FC = () => {
  return (
    <section className="full-width-cta">
      <div className="cta-background">
        <img src="/assets/images/banner-bg.png" alt="Modern Living" className="cta-bg-img" />
        <div className="cta-overlay"></div>
      </div>
      <div className="container cta-container scroll-reveal active">
        <span className="section-eyebrow">24/7 Available</span>
        <h2 className="cta-heading">Your Comfort, Our Responsibility</h2>
        <p className="cta-subheading">
          Emergency repair, routine maintenance, or a full renovation — 
          Al SAND is always ready to serve you across Dubai and the UAE.
        </p>
        <div className="cta-actions">
          <Button variant="solid" className="cta-btn" href="tel:+971566069542">
            Call Us Now
          </Button>
          <Button variant="outline" className="cta-btn" href="https://wa.me/971566069542">
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FullWidthCTA;
