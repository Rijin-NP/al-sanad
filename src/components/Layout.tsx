import React from 'react';
import './Layout.css';
import Navigation from './Navigation.tsx';
import Footer from './Footer.tsx';
import WhatsAppFloat from './WhatsAppFloat';
import BackToTop from './BackToTop';
import CookieBanner from './CookieBanner';
import Breadcrumbs from './Breadcrumbs';
import ScrollProgress from './ScrollProgress';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <ScrollProgress />
      <Navigation />
      <Breadcrumbs />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      <CookieBanner />
    </div>
  );
};

export default Layout;
