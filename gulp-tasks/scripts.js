'use strict';

var config = require('../gulp-config'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    gbabel = require('gulp-babel'),
    concat = require('gulp-concat'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    pump = require('pump');

gulp.task('scripts', function(cb){
    pump([
        gulp.src(config.paths.js.src),
        gbabel({presets: ['es2015', "stage-0"]}),
        concat(config.paths.names.js),
        gulpif(argv.production, uglify()),
        gulp.dest(config.paths.js.dest),
        notify('Scripts task completed')
    ], cb)
});
