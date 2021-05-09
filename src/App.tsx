import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Routes from './routes';
import './App.global.scss';

const APP_NAME = 'Joshua Stephen';
const APP_DESCRIPTION =
  'A web developer passionate about javascript all around the web.';

const websiteLd = {
  '@context': 'http://schema.org',
  '@type': 'WebSite',
  url: 'https://josteph.github.io/',
};

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{APP_NAME}</title>
        <meta name="application-name" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="jostephhh" />
        <meta property="og:url" content="https://josteph.github.io" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jostephhh" />
        <meta name="twitter:creator" content="@jostephhh" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </Helmet>
      <Routes />
    </HelmetProvider>
  );
}

export default App;
