module.exports = function(opts) {

    var gulp = require('gulp'),
        plumber = require('gulp-plumber'),
        revReplace = require('gulp-rev-replace');

    gulp.task("rev-replace", function() {
        
        var manifest = gulp.src(opts.manifest);

        return gulp.src(opts.src)
            .pipe(plumber({
                handleError: function (err) {
                    console.log(err);
                    this.emit('end');
                }
            }))
            .pipe(revReplace({
                manifest: manifest
            }))
            .pipe(gulp.dest(opts.dest));
    });
};
