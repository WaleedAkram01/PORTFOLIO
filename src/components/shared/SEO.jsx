import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = () => {
    const siteTitle = "Your Name - Full Stack Developer Portfolio";
    const siteDescription = "Full Stack Developer specializing in React, Node.js, and modern web technologies. Building exceptional digital experiences with clean code and beautiful design.";
    const siteUrl = "https://yourportfolio.com";
    const siteImage = "https://yourportfolio.com/og-image.jpg";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content="full stack developer, react developer, web developer, portfolio, UI/UX, frontend, backend, javascript" />
            <meta name="author" content="Your Name" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={siteImage} />

            {/* Favicon */}
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />

            {/* Theme Color */}
            <meta name="theme-color" content="#6366f1" />
        </Helmet>
    );
};