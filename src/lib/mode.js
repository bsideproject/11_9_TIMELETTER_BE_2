const appConfig = require('../config/loader').load('app');

const isDev =
  (appConfig.environment === 'development' &&
    process.env.NODE_ENV !== 'production') ||
  process.env.NODE_ENV === 'test';

module.exports = {
  dev: () => isDev,
  prod: () => !isDev,
};
