import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Routes from './routes';
import './App.global.scss';

const APP_NAME = 'Joshua Stephen';
const APP_DESCRIPTION =
  'A web developer passionate about javascript all around the web.';

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
      </Helmet>
      <Routes />
    </HelmetProvider>
  );
}

export default App;
