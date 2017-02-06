'use strict';

var config = require('../gulp-config'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    gulpif = require('gulp-if'),
    argv = require('yargs').argv;

gulp.task('images', function () {
    gulp.src(config.paths.images.src)
        .pipe(gulpif(argv.production, imagemin()))
        .pipe(gulp.dest(config.paths.images.dest));
});