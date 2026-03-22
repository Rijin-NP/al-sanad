import React from 'react';
import type { LucideIcon } from 'lucide-react';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, href }) => {
  return (
    <a href={href} className="service-card hover-lift">
      <div className="service-card-icon">
        <Icon className="icon-svg" size={32} />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <div className="service-card-footer">
        <span className="learn-more">Learn More</span>
        <span className="arrow">→</span>
      </div>
    </a>
  );
};

export default ServiceCard;
