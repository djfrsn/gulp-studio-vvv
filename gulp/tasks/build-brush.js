// Transport js to '/dist'
var gulp = require('gulp');

gulp.task('build-brush', function () {

    return gulp.src(sourced.brush)
    	.pipe(gulp.dest(dist.js));
});  