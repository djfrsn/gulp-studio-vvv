
 // Process Styles w/ the exclusion of critical css
var gulp = require('gulp');
	rename = require("gulp-rename");

gulp.task('styles', function () {
  var filterCritical = gulpFilter(['*', '!vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/critical/**/*.scss']);

    return gulp.src(sourced.sass)
        .pipe(changed(sourced.app, {hasChanged: changed.compareSha1Digest}))
        .pipe(filterCritical)
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(sass({sourcemap: false, sourcemapPath: '.', style: 'compact'}))
        .pipe(rename('style.css'))
        .pipe(gulp.dest(sourced.styles))
        .pipe(browserSync.reload({stream:true, once: true}));
});


