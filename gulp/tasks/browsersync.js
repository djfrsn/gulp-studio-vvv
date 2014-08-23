var gulp = require('gulp');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        	proxy: "studio.dev",
    });
});
