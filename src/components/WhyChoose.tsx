import React from 'react';
import { BadgeCheck, Clock, Tag, Wrench, Star } from 'lucide-react';
import './WhyChoose.css';

const WhyChoose: React.FC = () => {
  const pillars = [
    {
      title: 'Experienced & Skilled Technicians',
      body: 'Certified professionals with years of specialised field experience delivering reliable, lasting solutions.',
      icon: BadgeCheck,
    },
    {
      title: 'Fast & Reliable Service',
      body: 'Quick response times, punctual arrivals, and efficient job completion — without compromising on quality.',
      icon: Clock,
    },
    {
      title: 'Transparent Pricing',
      body: 'Clear quotes, zero hidden charges, and affordable maintenance plans for every property size.',
      icon: Tag,
    },
    {
      title: 'Quality Materials & Tools',
      body: 'Top-grade materials and modern tools ensuring every service meets international safety and quality standards.',
      icon: Wrench,
    },
    {
      title: 'Complete Customer Satisfaction',
      body: '100% satisfaction is our mission. We maintain consistent communication from start to handover.',
      icon: Star,
    },
  ];

  return (
    <section className="why-choose-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Features & Trust</span>
          <h2 className="section-heading">Why Choose Al SAND?</h2>
          <p className="section-subheading">
            Thousands of clients across the UAE trust Al SAND because we
            deliver quality, transparency, and long-term satisfaction.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="pillar-item hover-lift">
              <div className="pillar-icon-box">
                <pillar.icon className="pillar-icon" size={32} />
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-body">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
