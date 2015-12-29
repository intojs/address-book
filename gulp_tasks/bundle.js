module.exports = function(opts) {

    var gulp = require('gulp'),
        plumber = require('gulp-plumber'),
        rev = require('gulp-rev'),
        sourcemaps = require('gulp-sourcemaps'),
        gulpJspm = require('gulp-jspm');

    gulp.task('bundle', function(callback) {
        return gulp.src(opts.src)
            .pipe(plumber({
                handleError: function (err) {
                    console.log(err);
                    this.emit('end');
                }
            }))
            .pipe(sourcemaps.init())
            .pipe(gulpJspm({
                selfExecutingBundle: true,
                minify: true
            }))
            .pipe(rev())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(opts.dest))
            .pipe(rev.manifest('dist/rev-manifest.json', {base: process.cwd()+'/dist', merge: true}))
            .pipe(gulp.dest(opts.manifest));
    });

    // gulp.task('bundle', function (callback) {
    //     var jspm = require('jspm');
    //     var builder = new jspm.Builder();

    //     builder.bundle(opts.src, opts.bundle, { minify: true, sourceMaps: true, lowResSourceMaps: false }).then(function (output) {
    //         gulp.src("dist/app/*")
    //             .pipe(plumber({
    //                 handleError: function (err) {
    //                     console.log(err);
    //                     this.emit('end');
    //                 }
    //             }))
    //             // .pipe(sourcemaps.init())
    //             .pipe(rev())
    //             // .pipe(sourcemaps.write('.'))
    //             .pipe(gulp.dest(opts.dest))
    //             .pipe(rev.manifest('dist/rev-manifest.json', { base: process.cwd()+'/dist', merge: true }))
    //             .pipe(gulp.dest(opts.dest));
    //         callback();
    //     }).catch(function(err) {
    //         console.log(err);
    //         cb(err);
    //     });
    // });
};