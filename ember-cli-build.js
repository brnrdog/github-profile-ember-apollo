'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const cssModules = {
  headerModules: ['github-profile/styles/app'],

  plugins: [
    require('postcss-import')({ path: ['node_modules'] }),
    require('tailwindcss')('./tailwind.config.js'),
  ],
};

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    cssModules,
  });

  return app.toTree();
};
