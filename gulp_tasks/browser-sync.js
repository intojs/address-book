(function(){
    
    'use strict';

    module.exports = function (opts) {

        var gulp = require('gulp'),
            browserSync = require('browser-sync');

        gulp.task('browser-sync', function() {
            browserSync({
                server: {
                    baseDir: opts.baseDir,
                    routes: opts.routes
                },
                port: opts.port,
                browser: opts.browser
            });
        });
    };
}());