import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function DefaultLayout({ title, description, children }) {
  const fullTitle = title ? `${title} | BlobbyOfficial` : 'BlobbyOfficial Portfolio';
  const metaDescription = description || 'BlobbyOfficial’s official portfolio showcasing games, music, videos, and blog content.';

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph / Social */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/social-preview.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/assets/social-preview.png" />
        {/* Favicon */}
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white selection:bg-pink-600 selection:text-white transition-colors">
        <Navbar />

        <main
          role="main"
          className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-20 min-h-[calc(100vh-64px)] flex flex-col animate-fade-in-up"
          tabIndex={-1}
        >
          {children}
        </main>

        <footer className="text-center text-gray-400 text-sm py-8 select-none">
          &copy; {new Date().getFullYear()} BlobbyOfficial. All rights reserved.
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out both;
        }
      `}</style>
    </>
  );
}

DefaultLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};
