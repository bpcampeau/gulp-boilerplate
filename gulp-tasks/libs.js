'use strict';

var config = require('../gulp-config'),
    gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('libs', function () {
    var libs = config.paths.libs.src;
    return gulp.src(libs)
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest(config.paths.js.dest));
});