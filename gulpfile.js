/**
 * Construction and common tasks
 * from the front-end implementation
 * @author David Avellaneda / Monoku Team
 */

/**
 * Node Modules and Gulp Pipes
 */
var gulp = require('gulp'),
    
	autoprefixer = require('gulp-autoprefixer'),
    
	concat = require('gulp-changed'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass'),
	header = require('gulp-header'),
	jshint = require('gulp-jshint'),
    
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	
	require = require('requirejs'),
    
	shell = require('shelljs'),
	doT = require('dot')

/**
 * Banner
 */
var bannerStr = 'Monomi[{{=it.module}}] by Monoku {{=new Date()}}',
	bannerTmpl = doT.template( bannerStr ),
	banner = function( module ){
		return '/*! ' + bannerTmpl({ module: module }) + ' */\n'
	}

/**
 * Paths
 */
var BASE = 'content/js/',
	BOWER = 'content/components/',
	DIST = 'content/dist/'


gulp.task('default', ['dist-js'], function() {

})

/**
 * JavaScript Compilation
 */
gulp.task('dist-js', function() {
	shell.exec('rm -rf ' + DIST)

	// TODO build requirejs
	gulp.src([
		// <!-- bower:js -->
		// <!-- endbower -->
	])
	.pipe( concat('app.js') )
	.pipe( uglify() )
	.pipe( header( banner('App') ))
	.pipe( gulp.dest( DIST ) )

	// say('compiled: admin')
})

// TODO Watch
// TODO Build Compass with autoprefix
// TODO Retina?