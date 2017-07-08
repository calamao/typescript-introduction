
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
      'spec.bundle.all.js'
    ],

    preprocessors: {
      'spec.bundle.all.js': ['webpack']
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