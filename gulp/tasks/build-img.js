// Minify imgs & transport to 'dist/'
var gulp       = require('gulp'),
	imagemin   = require('gulp-imagemin'); // https://github.com/sindresorhus/gulp-imagemin
	
gulp.task('build-img', function() {

	return gulp.src(sourced.img)
		.pipe(imagemin()) // Optimize img
		.pipe(gulp.dest(dist.img));
});
