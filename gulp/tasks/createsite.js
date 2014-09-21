
var gulp = require('gulp'),
    prompt = require('gulp-prompt'),
    replace = require('gulp-replace'),
    shell = require('gulp-shell');

var site = 'site';
var site_dir = 'site_dir';

gulp.task('vvv-site-wizard', function(){

    return gulp.src(setup.root, {read: false})
        .pipe(prompt.prompt([
            {
                type: 'input',
                name: 'site',
                message: 'What is the name of your site(ex: studio.dev)?'
            },
            {
                type: 'input',
                name: 'site_dir',
                message: 'What will be the name of your site directory?'
            }], function(res){
            site = res.site;
            site_dir = res.site_dir;
        }));
});
gulp.task('path-replace-site', function(){
  return gulp.src(['gulp/tasks/browsersync.js'])
    .pipe(replace('site.dev', site))
    .pipe(gulp.dest('gulp/tasks/'));
});

    gulp.task('path-replace-site-dir', function(){
  return gulp.src(['gulp/index.js'])
    .pipe(replace('sitename', site_dir))
    .pipe(gulp.dest('gulp/'));
});

gulp.task('castSpell', function() {
    return gulp.src(setup.root)
        .pipe(shell([
      'cd vvv/vagrant-local/ && vvv -a create -n ' + site_dir + ' -d ' + site + ' -v 3.9.1 -x'
    ]))
});

gulp.task('clone-studio-theme', function() {
    return gulp.src(setup.root)
        .pipe(shell([
      'cd vvv/vagrant-local/www/' + site_dir + '/htdocs/wp-content/themes/ && mkdir studio && cd studio && git clone https://github.com/djfrsn/studio-wp-theme.git .'
    ]))
});

gulp.task('createsite', function(callback) {
        runSequence( 'vvv-site-wizard', 
            [ 'castSpell', 'path-replace-site', 'path-replace-site-dir' ], 'clone-studio-theme',
          callback);
});