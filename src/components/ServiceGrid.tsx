import React from 'react';
import { 
  Wind, Hammer, Zap, Drill, Layout as LayoutIcon, 
  Maximize, Paintbrush, Pipette, Home, Building2, 
  Bath, UtensilsCrossed, Briefcase 
} from 'lucide-react';
import './ServiceGrid.css';
import ServiceCard from './ServiceCard';

const ServiceGrid: React.FC = () => {
  const maintenanceServices = [
    {
      title: 'AC Services',
      icon: Wind,
      description: 'Professional AC repair, installation, cleaning, and maintenance for homes and villas.',
      href: '/contact?service=AC%20Services',
    },
    {
      title: 'Electrical Services',
      icon: Zap,
      description: 'Safe wiring, lighting, fuse installation, and troubleshooting for all properties.',
      href: '/contact?service=Electrical',
    },
    {
      title: 'Plumbing Services',
      icon: Pipette,
      description: 'Expert repair and installation — leaking taps, clogged drains, and pipe replacements.',
      href: '/contact?service=Plumbing',
    },
    {
      title: 'Handyman Services',
      icon: Drill,
      description: 'Reliable on-call handyman solutions for everyday repairs and installations.',
      href: '/contact?service=Handyman',
    },
    {
      title: 'Painting Services',
      icon: Paintbrush,
      description: 'Interior and exterior painting with smooth, lasting finishes for homes and villas.',
      href: '/contact?service=Painting',
    },
    {
      title: 'Carpentry Services',
      icon: Hammer,
      description: 'Custom furniture, door repair, wardrobes, and shelving built with precision.',
      href: '/contact?service=Carpentry',
    },
    {
      title: 'False Ceiling',
      icon: LayoutIcon,
      description: 'Stylish gypsum and modern false ceiling installations for homes and offices.',
      href: '/contact?service=False%20Ceiling',
    },
    {
      title: 'Glass Partition',
      icon: Maximize,
      description: 'Frameless glass walls and bespoke partitions for homes and offices.',
      href: '/contact?service=Glass%20Partition',
    },
  ];

  const renovationServices = [
    {
      title: 'Villa Renovation',
      icon: Building2,
      description: 'Full-scope villa renovation from design to handover — crafted on schedule.',
      href: '/contact?service=Villa%20Renovation',
    },
    {
      title: 'Apartment Renovation',
      icon: Home,
      description: 'Complete apartment makeovers with modern designs and premium finishes.',
      href: '/contact?service=Apartment%20Renovation',
    },
    {
      title: 'Office Renovation',
      icon: Briefcase,
      description: 'Bespoke office fit-outs and remodelling that boost brand identity.',
      href: '/contact?service=Office%20Renovation',
    },
    {
      title: 'Kitchen Renovation',
      icon: UtensilsCrossed,
      description: 'Modern kitchen transformations with smart layouts and durable finishes.',
      href: '/contact?service=Kitchen%20Renovation',
    },
    {
      title: 'Bathroom Renovation',
      icon: Bath,
      description: 'Transform your bathroom with expert tiling, plumbing, and upgrades.',
      href: '/contact?service=Bathroom%20Renovation',
    },
  ];

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Excellence in Craftsmanship</span>
          <h2 className="section-heading">Trusted Services Across UAE</h2>
          <p className="section-subheading">
            Whether it's routine maintenance or a complete property transformation, 
            Al SAND delivers precision and quality in every task.
          </p>
        </div>

        <div className="service-category">
          <h3 className="category-header">Property Maintenance</h3>
          <div className="service-grid">
            {maintenanceServices.map((service) => (
              <ServiceCard 
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>

        <div className="service-category" style={{ marginTop: '80px' }}>
          <h3 className="category-header">Expert Renovations</h3>
          <div className="service-grid">
            {renovationServices.map((service) => (
              <ServiceCard 
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
