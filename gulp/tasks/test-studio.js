   // Run test on task
var gulp = require('gulp');

gulp.task('testMsg', function() {
		gulp.src(sourced.app)
  			.pipe(notify('Test complete »'));
});

gulp.task('test-app', function(callback) {
		runSequence( 'styles', 
	      [ 'brush', 'combCSS' ],
	      'studioMsg',
	      callback);
});

gulp.task('test-build', function(callback) {
		runSequence( 'clean', 'build-styles',
	      [ 'brush', 'dist-font' ],
	      'uglify-js',
	      [ 'build-img', 'build-brush' ],
	      'buildstudioMsg',
	      callback);
});

gulp.task('test', function(callback) {
		runSequence( 'test-app', 'test-build','testMsg',
	      callback);
});