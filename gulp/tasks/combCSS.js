// CombCSS
var gulp = require('gulp'),
    comb = require('gulp-csscomb'); // https://www.npmjs.org/package/gulp-csscomb

    
    gulp.task('combCSS', function() {
   
   		return gulp.src(sourced.sass) 	
        .pipe(comb('zen'))
        .pipe(gulp.dest(sourced.styles));
});