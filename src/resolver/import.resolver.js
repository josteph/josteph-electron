const appRootDir = require('app-root-dir');
const resolver = require('./index');

module.exports = {
  resolve: {
    modules: ['node_modules'],
    alias: resolver({ rootDir: appRootDir.get() }),
  },
};
