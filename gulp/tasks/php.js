// Live reload php
var gulp = require('gulp');

gulp.task('php', function () {

    return gulp.src(sourced.php)
    	.pipe(gulp.dest(sourced.app))
    	.pipe(browserSync.reload({stream:true, once: true}));
});  