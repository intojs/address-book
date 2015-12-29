(function(){

    'use strict';

    module.exports = function(opts) {

    	var gulp = require('gulp'),
            useref = require('gulp-useref'),
            plumber = require('gulp-plumber'),
            gulpif = require('gulp-if'),
            uglify = require('gulp-uglify'),
            minifyCss = require('gulp-minify-css'),
            rev = require('gulp-rev'),
            revReplace = require('gulp-rev-replace'),
            lazypipe = require('lazypipe'),
            sourcemaps = require('gulp-sourcemaps');

        gulp.task('useref', function(callback) {
            return gulp.src(opts.src)
                .pipe(plumber({
                    handleError: function (err) {
                        console.log(err);
                        this.emit('end');
                    }
                }))
                .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
                .pipe(gulpif('*.css', minifyCss()))
                .pipe(gulpif('*.js', uglify()))
                .pipe(gulpif('*.js', rev()))
                .pipe(gulpif('*.css', rev()))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest(opts.dest))
                .pipe(rev.manifest('dist/rev-manifest.json', {base: process.cwd()+'/dist', merge: true}))
                .pipe(gulp.dest('./dist'));
        });
    };
}());