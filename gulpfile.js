'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var fs = require('fs');

// Nodemon
var nodemon = require('nodemon');

// Webpack
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js');
var devConfig = require('./webpack.dev.config.js');

/**
 * Build for production. We use an empty function b/c we don't care what happens
 * with the build. The arguments are included for reference in case we want to
 * use them later on. For full docs see:
 * http://webpack.github.io/docs/node.js-api.html
 *
 * Note: We can remove the eslint declarations if we handle the error.
 */
gulp.task('build', function() {
  /* eslint-disable */
  webpack(config, function(err, stats){ /* Empty function */ });
  /* eslint-enable */
});

/**
 * Remove bundled files from public/
 * Note: This does not remove the public directory itself
 */
gulp.task('clean', function() {
  fs.readdirSync('public').forEach(function(filename) {
    fs.unlinkSync('public/' + filename);
  });
  console.log(gutil.colors.green('`public/` directory cleaned.'));
});

gulp.task('nodemon', function() {
  nodemon({
    script: 'bin/www',
    watch: 'server/',
    ext: 'js',
    env: { NODE_ENV: process.env.NODE_ENV },
    ignore: [ 'node_modules/', '.git/' ]
  });
});

gulp.task('webpack', function() {
  var DEV_PORT = process.env.DEV_PORT || 8080;

  var server = new WebpackDevServer(webpack(devConfig), {
    contentBase: './public/',
    publicPath: devConfig.output.publicPath,
    hot: true,
    inline: true,
    stats: {
      colors: true,
      chunks: false
    }
  });

  server.listen(DEV_PORT, function(err, result) {
    if (err) console.error(err);
    console.log(
      gutil.colors.green('Webpack server'),
      'listening on port',
      gutil.colors.magenta(DEV_PORT)
    );
  });
});

gulp.task('default', ['nodemon', 'webpack']);
