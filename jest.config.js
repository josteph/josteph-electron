module.exports = {
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.erb/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@context(.*)$': '<rootDir>/src/context$1',
    '^@interfaces(.*)$': '<rootDir>/src/interfaces$1',
    '^@helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@lib(.*)$': '<rootDir>/src/lib$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleDirectories: ['node_modules', 'src/node_modules'],
  setupFiles: ['./.erb/scripts/CheckBuildsExist.js'],
};
