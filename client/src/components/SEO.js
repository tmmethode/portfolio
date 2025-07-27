import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'TMMETHODE',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteTitle = 'TMMETHODE - Cloud Engineer & Systems Administrator';
  const siteDescription = 'TMMETHODE is a Cloud Engineer & Systems Administrator with expertise in AWS, Google Cloud, Azure, DevOps, cybersecurity, and software development. Based in Kigali, Rwanda.';
  const siteUrl = 'https://tmmethode.com';
  const siteImage = `${siteUrl}/og-image.jpg`;

  const seoTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const seoDescription = description || siteDescription;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;
  const seoImage = image ? `${siteUrl}${image}` : siteImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="TMMETHODE Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="RW" />
      <meta name="geo.placename" content="Kigali, Rwanda" />
      <meta name="geo.position" content="-1.9441;30.0619" />
      <meta name="ICBM" content="-1.9441, 30.0619" />
      
      {/* DC Meta Tags */}
      <meta name="DC.title" content={seoTitle} />
      <meta name="DC.creator" content={author} />
      <meta name="DC.subject" content="Cloud Engineering, DevOps, Systems Administration" />
      <meta name="DC.description" content={seoDescription} />
      <meta name="DC.publisher" content="TMMETHODE" />
      <meta name="DC.contributor" content="TMMETHODE" />
      <meta name="DC.date" content={new Date().toISOString().split('T')[0]} />
      <meta name="DC.type" content="Text" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={seoUrl} />
      <meta name="DC.language" content="en" />
      <meta name="DC.coverage" content="Kigali, Rwanda" />
      <meta name="DC.rights" content="Copyright TMMETHODE" />
    </Helmet>
  );
};

export default SEO; 