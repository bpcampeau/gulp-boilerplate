'use strict';

var config = require('../gulp-config'),
    gulp = require('gulp');

gulp.task('fonts', function () {
    gulp.src(config.paths.fonts.src)
        .pipe(gulp.dest(config.paths.fonts.dest));
});