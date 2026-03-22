import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website', 
  ogImage = '/assets/images/hero-poster.png' 
}) => {
  const siteName = 'Al SAND';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Premium Home & Office Renovation Services`;
  const metaDescription = description || 'Al SAND is a trusted renovation and maintenance company in Dubai, Abu Dhabi, and the UAE. We specialize in villa renovation, AC services, electrical, and plumbing.';
  const siteUrl = 'https://www.alsand.ae';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Al SAND",
          "image": `${siteUrl}/assets/images/al-sand-logo.png`,
          "@id": siteUrl,
          "url": siteUrl,
          "telephone": "+971566069542",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Business Bay",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "postalCode": "00000",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.1852,
            "longitude": 55.2743
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "20:00"
          },
          "sameAs": [
            "https://facebook.com/alsand.ae",
            "https://instagram.com/alsand.ae"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
