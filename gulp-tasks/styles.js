'use strict';

var config = require('../gulp-config'),
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    cssnext = require('postcss-cssnext'),
    bem = require('postcss-bem'),
    Import = require('postcss-import'),
    nested = require('postcss-nested'),
    nano = require('cssnano'),
    gulpif = require('gulp-if'),
    argv = require('yargs').argv;

var processors = [
    Import,
    cssnext(config.css.next),
    nested
];

if (argv.production) {
    processors.push(nano);
}

var onError = function (error) {
    notify.onError({
        title: 'CSS Error',
        message: 'Error: <%= error.message %>'
    })(error);
    this.emit('end');
};

gulp.task('styles', function () {
    gulp.src(config.paths.css.src)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(postcss(processors))
        .pipe(concat(config.paths.names.css))
        .pipe(gulp.dest(config.paths.css.dest))
        .pipe(notify('CSS task completed'))
        .on('error', function () {
            this.emit('error', 'CSS task error');
        })
});