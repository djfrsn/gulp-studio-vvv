   // Run all task essential to compile optimized '/app' 
var gulp = require('gulp');


	gulp.task('studioMsg', function() {
		gulp.src(sourced.app)
  			.pipe(notify('Studi˚ optimized ◊'));
	});


	// This will run in this order:
	// * styles, compile-critical, scaffold in series
	// * inline-critical and brush in parallel
	// * Finally call the callback function
gulp.task('studio', function(callback) {
		runSequence( 'styles',
	      [ 'brush', 'combCSS' ],
	      'studioMsg',
	      callback);
});