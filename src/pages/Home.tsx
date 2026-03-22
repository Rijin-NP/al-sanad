import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import ServiceGrid from '../components/ServiceGrid';
import AboutSnippet from '../components/AboutSnippet';
import WhyChoose from '../components/WhyChoose';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FullWidthCTA from '../components/FullWidthCTA';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Premium Renovation & Maintenance Services in UAE" 
        description="Al SAND is your trusted partner for premium villa renovations, AC services, electrical, plumbing, and more across Dubai and the UAE. Call us for a free quote!"
      />
      <Hero />
      <StatsBar />
      <ServiceGrid />
      <AboutSnippet />
      <WhyChoose />
      <TestimonialCarousel />
      <FullWidthCTA />
      <ContactForm />
    </>
  );
};

export default Home;
