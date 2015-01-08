// Live reload php
var gulp = require('gulp');

gulp.task('php', function () {

    return gulp.src(sourced.php)
    	.pipe(browserSync.reload({stream:true, once: true}));
});  
