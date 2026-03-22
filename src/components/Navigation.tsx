import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Button from './Button';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/assets/images/al-sand-logo.png" alt="Al SAND" className="nav-logo-img" style={{ height: '56px' }} />
          </Link>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}>
          {navLinks.map((link) => (
            <div key={link.label} className="nav-item">
              <Link to={link.href} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="nav-actions">
          <Button variant="outline" className="nav-cta" href="/contact">
            Get a Free Quote
          </Button>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
