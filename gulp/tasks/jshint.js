// Lint js 
var gulp = require('gulp'),
    jshint = require("gulp-jshint"),
    stylish = require('jshint-stylish');

gulp.task('jshint', function() {
	var filterBrushAndVendors = gulpFilter([ '*', '!app/lib/js/brush/*.js', '!app/lib/js/vendor/*.js' ]);
           
            return gulp.src(sourced.jsdir)
            .pipe(filterBrushAndVendors)
            .pipe(changed(sourced.app, {hasChanged: changed.compareSha1Digest}))
            .pipe(plumber({errorHandler: notify.onError()}))
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
});