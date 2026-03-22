import React, { useState } from 'react';
import SEO from '../components/SEO';
import './Projects.css';

const Projects: React.FC = () => {
  const categories = ['All', 'Renovation', 'Maintenance', 'Commercial'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    { title: 'Luxury Villa Renovation - Emirates Hills', category: 'Renovation', image: '/assets/images/project-villa.png' },
    { title: 'Modern Office Fit-out - Business Bay', category: 'Commercial', image: '/assets/images/project-office.png' },
    { title: 'Smart AC Maintenance - Palm Jumeirah', category: 'Maintenance', image: '/assets/images/project-ac.png' },
    { title: 'Premium Exterior Painting - Jumeirah', category: 'Renovation', image: '/assets/images/project-painting.png' },
    { title: 'Luxury Bathroom Upgrade - Dubai Marina', category: 'Renovation', image: '/assets/images/project-bathroom.png' },
    { title: 'Commercial Electrical Overhaul - DIFC', category: 'Commercial', image: '/assets/images/project-electrical.png' },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="projects-page">
      <SEO 
        title="Our Projects" 
        description="Explore our portfolio of successful villa renovations, office fit-outs, and maintenance projects across Dubai and the UAE."
        canonical="/projects"
      />
      <section className="page-hero section-padding">
        <div className="container">
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="gold-gradient-text">Our Recent Projects</h1>
        </div>
      </section>

      <section className="projects-grid-section section-padding">
        <div className="container">
          <div className="categories-filter">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card hover-lift">
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
