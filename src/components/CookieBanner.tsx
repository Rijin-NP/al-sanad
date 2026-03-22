import React, { useState, useEffect } from 'react';
import Button from './Button';
import './CookieBanner.css';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="container banner-flex">
        <p className="banner-text">
          We use cookies to improve your experience on our website. 
          By browsing this website, you agree to our use of cookies.
        </p>
        <div className="banner-actions">
          <Button variant="outline" size="sm" onClick={declineCookies}>Decline</Button>
          <Button variant="solid" size="sm" onClick={acceptCookies}>Accept</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
