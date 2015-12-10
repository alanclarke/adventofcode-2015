module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: ['test/*.js'],
    preprocessors: {
      'test/*.js': ['webpack', 'sourcemap']
    },
    webpack: {
      watch: true,
      devtool: 'inline-source-map'
    },
    webpackServer: {
      quiet: true,
      noInfo: true
    },
    reporters: ['progress'],
    browsers: ['Chrome']
  })
}
