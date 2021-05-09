const path = require('path');

function resolver({ rootDir }) {
  const appSrc = `${rootDir}/src`;

  return {
    '@': path.resolve(appSrc),
    '@assets': path.resolve(appSrc, './assets/'),
    '@components': path.resolve(appSrc, './components/'),
    '@context': path.resolve(appSrc, './context/'),
    '@constants': path.resolve(appSrc, './constants/'),
    '@helpers': path.resolve(appSrc, './helpers/'),
    '@interfaces': path.resolve(appSrc, './interfaces/'),
    '@lib': path.resolve(appSrc, './lib/'),
    '@hooks': path.resolve(appSrc, './hooks/'),
    '@routes': path.resolve(appSrc, './routes/'),
    '@styles': path.resolve(appSrc, './styles/'),
  };
}

module.exports = resolver;
