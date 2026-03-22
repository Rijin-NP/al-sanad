import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, Twitter, Linkedin, 
  Phone, Mail, MapPin 
} from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Our Projects', href: '/projects' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      heading: 'Our Services',
      links: [
        { label: 'AC Services', href: '/services/ac-services' },
        { label: 'Carpentry', href: '/services/carpentry' },
        { label: 'Electrical', href: '/services/electrical' },
        { label: 'Painting', href: '/services/painting' },
        { label: 'Plumbing', href: '/services/plumbing' },
        { label: 'Villa Renovation', href: '/renovation/villa' },
      ],
    },
    {
      heading: 'Contact',
      items: [
        { icon: Phone, text: '+971 56 606 9542', href: 'tel:+971566069542' },
        { icon: Mail, text: 'alsanadts26@gmail.com', href: 'mailto:alsanadts26@gmail.com' },
        { icon: MapPin, text: 'Dubai, UAE', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/">
              <img src="/assets/images/al-sand-logo.png" alt="Al SAND" className="footer-logo-img" style={{ height: '64px', marginBottom: '1rem' }} />
            </Link>
            <p className="footer-tagline">
              Delivering reliable, professional renovation and maintenance
              services across the UAE with guaranteed quality.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading} className="footer-column">
              <h3 className="footer-heading">{column.heading}</h3>
              <ul className="footer-list">
                {column.links && column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
                {column.items && column.items.map((item) => (
                  <li key={item.text} className="footer-contact-item">
                    <a href={item.href} className="footer-link contact-flex">
                      <item.icon size={18} className="gold-text" />
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Al SAND. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
