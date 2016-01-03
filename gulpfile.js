(function() {
	
	'use strict';
	
	var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		plumber = require('gulp-plumber'),
		KarmaServer = require('karma').Server,
		runSeq = require('run-sequence');

	/**
	 *  --- Settings --- 
	 */

	var tasksPath = './gulp_tasks',
	    basePath = './src',
	    distPath = './dist';
	
   /**
    *	--- Tasks ---
    */

    require(tasksPath + '/browser-sync.js')({
    	baseDir: basePath,
    	port: 4000,
    	browser: 'google chrome',
    	routes: {
    		"/": './'
    	}
	});

	require(tasksPath + '/bundle.js')({
		src: basePath + '/app/app.js',
    	dest: distPath + '/app',
    	manifest: distPath,
    	bundle: distPath + '/app/app.bundle.js'
	});

	require(tasksPath + '/clean.js')({
		src: distPath + '/*'
	});

	require(tasksPath + '/copy-assets.js')({
    	src: basePath + '/assets/*',
    	dest: distPath + '/assets'
	});

	require(tasksPath + '/copy-fonts.js')({
    	src: basePath + '/fonts/*',
    	dest: distPath + '/fonts'
	});
	
	require(tasksPath + '/html-min.js')({
    	src: distPath + '/index.html',
    	dest: distPath
	});

	require(tasksPath + '/js-hint.js')({
		src: [
			basePath + '/app/**/*.js',
			'!' + basePath+'/app/**/*.spec.js'
		]
	});

	require(tasksPath + '/less.js')({
    	src: basePath + '/less/main.less',
    	dest: basePath + '/css'
	});
	
	require(tasksPath + '/rev-replace.js')({
		src: distPath + '/index.html',
    	dest: distPath,
    	manifest: distPath + '/rev-manifest.json'
	});

	require(tasksPath + '/useref.js')({
    	src: basePath + '/index.html',
    	dest: distPath
	});

	/**
	 *	--- Watch ---
	 */

	gulp.task('watch', function() {

		gulp.watch(basePath+'/**/*.html', browserSync.reload);

		gulp.watch([
			basePath+'/app/**/*.js',
			'!' + basePath+'/app/**/*.spec.js',
		], ['js-hint', browserSync.reload]);
		
		gulp.watch(basePath+'/**/*.less', ['less']);

		gulp.watch([
			basePath + '/css/**/*.css',
			'!'+basePath+'/css/main.css'
		], function(ev) {
        	gulp.src(ev.path, { read: false })
        		.pipe(plumber({
	                errorHandler: function(err) {
	                    console.log(err);
	                    this.emit('end');
	                }
	            }))
        		.pipe(browserSync.stream());
    	});
	});

	/**
	 *  --- Dev --- 
	 */

	gulp.task('dev', function(callback) {
		runSeq(
			['js-hint', 'less'],
			['browser-sync'],
			'watch',
			callback
		);
	});

	/**
	 *  --- Test --- 
	 */

	gulp.task('test', function(callback) {
	  	new KarmaServer({
			configFile: __dirname + '/karma/karma.conf.js',
		}, callback).start();
	});

	/**
	 *	--- Build ---
	 */

	gulp.task('build', function(callback) {
		runSeq(
			['clean'],
			['js-hint'],
			['useref'],
			['bundle'],
			['rev-replace'],
			['html-min'],
			['copy-assets', 'copy-fonts'],
			callback
		);
	});	 
}());