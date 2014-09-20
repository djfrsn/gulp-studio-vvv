
var gulp = require('gulp'),
    prompt = require('gulp-prompt'),
    shell = require('gulp-shell');

var response = 'response';

gulp.task('vvv-site-wizard', function(){

    return gulp.src(sourced.app, {read: false})
        .pipe(prompt.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: 'What is the name of your site(ex: studio.dev)'
            }
        ], function(res){
            response = res.userInput;
        }));
});

gulp.task('createsite', ['vvv-site-wizard'], function() {
    return gulp.src(sourced.app)
        .pipe(shell([
      'cd vvv/vagrant-local/ && vvv -a create -n ' + response + '-d ' + response + '-v 3.9.1 -x'
    ]))
});