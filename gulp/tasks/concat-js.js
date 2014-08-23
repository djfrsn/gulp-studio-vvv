// Concat JS 
var gulp = require('gulp'),
    concat = require('gulp-concat');
    
    gulp.task('concat-js', function() { 

            return gulp.src(sourced.jslib)
            .pipe(plumber({errorHandler: notify.onError()}))
            .pipe(concat('brush.js'))
            // Add gulp-notify
            .pipe(gulp.dest(sourced.brushdir));
});