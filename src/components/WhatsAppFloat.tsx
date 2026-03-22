import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

const WhatsAppFloat: React.FC = () => {
  return (
    <a 
      href="https://wa.me/971566069542" 
      className="whatsapp-float hover-lift" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppFloat;
