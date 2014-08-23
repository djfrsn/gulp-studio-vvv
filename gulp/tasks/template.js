// Task Template
var gulp = require('gulp');

gulp.task('newTask', function () {

    return gulp.src(sourced.php)
    	// do something here
    	.pipe(gulp.dest(sourced.app));
});  