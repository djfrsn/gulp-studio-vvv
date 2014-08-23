// Task Template
var gulp = require('gulp'),
	shell = require('gulp-shell');

gulp.task('vvv', shell.task([
        'mkdir vvv && cd vvv && git clone git://github.com/Varying-Vagrant-Vagrants/VVV.git vagrant-local'
]));