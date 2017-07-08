
module.exports = function(config) {
  config.set({
    // karma start temp/karma.config.js --auto-watch --no-single-run
    singleRun: false,
    autoWatch: true,
    basePath: '../',
    
    browsers: [
      'PhantomJS'
    ],

    frameworks: [
      'jasmine'
    ],

    files: [
      'spec.bundle.6.js'
    ],

    preprocessors: {
      'spec.bundle.6.js': ['webpack']
    },

    webpack: require('../webpack-test.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ]
  });
};