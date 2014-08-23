var gulp = require('gulp');

gulp.task('paint', [ 'setWatch', 'browser-sync'], function () {
    gulp.watch([ sourced.sass, sourced.ignoreCritCSS, sourced.ignoreCritSASS],
     	['styles']);
    gulp.watch([ sourced.php],
    	['php']);
    gulp.watch([ sourced.includes, sourced.easel],
    	['scaffold']);
    gulp.watch([ sourced.jsdir],
    	['brush']);
});