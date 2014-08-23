// Autoprefix CSS
var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'); // https://github.com/ai/autoprefixer

    
    gulp.task('autoprefixCSS', function() {
   
   		return gulp.src(sourced.css) 	
        .pipe(prefix('last 2 version', "> 1%", "Firefox ESR", "Opera 12.1", "ie 9", "ie 8", "ie 7"))
        .pipe(gulp.dest(sourced.styles));
});