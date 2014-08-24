// Task Template
var gulp = require('gulp'),
	prompt = require('gulp-prompt'),
	shell = require('gulp-shell');

gulp.task('siteName', function(){

    return gulp.src(sourced.app)
        .pipe(prompt.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: 'What is the name of your site?'
            }
        ], function(res){
            response = res.userInput;
        }));
});

	

gulp.task('v', ['siteName'], shell.task([
	vtask = gulp + '' + response;
        vtask
]));

gulp.task('v', ['v', 'siteName'],function(callback) {
		runSequence( 'siteName', 'v',
	      callback);
});


var myVar = 'MONKEY';

gulp.task('userinput1', function(){

    return gulp.src(sourced.app, {read: false})
        .pipe(prompt.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: 'Say something'
            }
        ], function(res){
            myVar = res.userInput;
        }));
});

gulp.task('userinput', ['userinput1'], function() {
    return gulp.src(sourced.app)
        .pipe(prompt.confirm('You said ' + myVar));
});