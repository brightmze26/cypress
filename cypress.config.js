const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: require('./webpack.config'),
        watchOptions: {},
      };

      on('file:preprocessor', webpack(options));
      return config;
    },
    baseUrl: 'https://demoblaze.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: '**/*.feature',
  },
});
