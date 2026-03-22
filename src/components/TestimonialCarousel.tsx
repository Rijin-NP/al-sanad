import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css';

const TestimonialCarousel: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Homeowner',
      content: 'Al SAND transformed our villa with incredible attention to detail. The renovation was completed on time and exceeded our expectations!',
      rating: 5,
    },
    {
      name: 'Ahmed K.',
      role: 'Business Owner',
      content: 'Professional, reliable, and thorough. Their maintenance team is the best we\'ve worked with in Dubai.',
      rating: 5,
    },
    {
      name: 'Michael R.',
      role: 'Property Manager',
      content: 'We use Al SAND for all our property maintenance needs. Their expertise and transparent pricing make them a trusted partner.',
      rating: 5,
    },
    {
      name: 'David L.',
      role: 'Office Manager',
      content: 'Al SAND completed our office fit-out with professional flair. The project was handled with zero disruption to our operations.',
      rating: 5,
    },
    {
      name: 'Fatima S.',
      role: 'Villa Owner',
      content: 'Reliable and honest team. Their plumbing and electrical work is top-tier. I highly recommend them for any home maintenance.',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-heading">What Our Customers Say</h2>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <p className="testimonial-content">{testimonials[activeIndex].content}</p>
            <div className="testimonial-author">
              <span className="author-name">{testimonials[activeIndex].name}</span>
              <span className="author-role">{testimonials[activeIndex].role}</span>
            </div>
            <div className="testimonial-rating">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button className="control-btn" onClick={prevTestimonial}>←</button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <span 
                  key={i} 
                  className={`dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                ></span>
              ))}
            </div>
            <button className="control-btn" onClick={nextTestimonial}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
