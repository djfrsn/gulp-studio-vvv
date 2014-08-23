// Run build task & transport to 'dist/'
var gulp = require('gulp'),
	rimraf = require('rimraf'),
	uglify = require('gulp-uglify');

	gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
	});
	    
	gulp.task('dist-font', function() {
	
		return gulp.src(sourced.font) 
			.pipe(gulp.dest(dist.font));
	});


	gulp.task('uglify-js', function() {
	
	  return gulp.src(sourced.brush)
	  	.pipe(plumber({errorHandler: notify.onError()}))
	  	.pipe(uglify())
	    .pipe(gulp.dest(sourced.brushdir))
	});

	gulp.task('buildstudioMsg', function() {
		gulp.src(sourced.app)
  			.pipe(notify('Studi˚ built ≈vy'));
	});

	// This will run in this order:
	// * document
	// * order
	// * here
	// * 
gulp.task('build-studio', function(callback) {
		runSequence( 'clean', 'build-styles',
	      [ 'brush', 'dist-font' ],
	      'uglify-js',  
	      [ 'build-img', 'build-brush' ],
	      'buildstudioMsg',
	      callback);
});
 