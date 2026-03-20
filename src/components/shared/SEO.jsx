import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = () => {
    const siteTitle = "Waleed Akram Jarral";
    const siteDescription = "Waleed Akram Jarral - Full Stack Developer portfolio showcasing projects, skills, experience, and contact information.";
    const siteUrl = "https://portfolio-peach-six-pfyjtg4nlj.vercel.app";
    const siteImage = `${siteUrl}/favicon.svg`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content="full stack developer, react developer, web developer, portfolio, UI/UX, frontend, backend, javascript" />
            <meta name="author" content="Waleed Akram Jarral" />
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
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

            {/* Theme Color */}
            <meta name="theme-color" content="#6366f1" />
        </Helmet>
    );
};