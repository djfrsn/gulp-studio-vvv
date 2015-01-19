## Studi˚

[Prototype Gulp task runner for use with VVV](http://studio.dennisjefferson.com) mainly concerned with SASS, Browser-Sync, VVV, & file minification. 

## Quickstart

I. Download Studi˚-vvv

Git:

```sh
mkdir studio && cd studio && git clone https://github.com/djfrsn/gulp-studio-vvv.git .
```
Future Option: [Slush-Studio](https://github.com/djfrsn/slush-studio)

II. Install dependencies

```sh
npm install
```

III. Install [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV). Once installed clone a VVV project into your '/studio/' dir using:

```sh
gulp vvv
```

IV. Install [Alison Barrett's VVV Site Wizard](https://github.com/aliso/vvv-site-wizard). The rest of this guide assumes you installed VVV Site Wizard to run from anywhere, otherwise you will need to define the path in the next step.

V. Create your site using:

```sh
gulp createsite
```
The name chosen will be the url served to the browser

VI. Update the proxy in 'gulp/task/browsersync.js' to your chosen site name 

VII. Run Studi˚ once your site is created

```sh
gulp
```
This compiles Studi˚ & launches browser-sync w/ 'yoursite.dev' as the default proxy. Vivy!

Head to '~/vagrant-local/www/yoursite.dev' & start building!  

Try running 

```sh
gulp test
``` 
to ensure task are stable.


## Features

#### Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp paint
```

Your app loads at 'http://localhost:3000' by default, & an external address is provided to access your app from multiple devices with features such as scroll & code sync provided by browser-sync.

Compatible with PHP, ASP, Rails and more.

#PHP
+ Watch 'yoursite.dev' php for changes & reload w/ Browsersync

#### HTML 
+ Minify
+ H5BP

#### CSS
+ SASS 
+ Inline Critical CSS w/ dedicated SASS lib
+ Autoprefixer
+ Lint
+ Comb CSS 

#### JS 
+ Minify
+ Concat
+ Lint

#### Images
+ Compression with image-min

#### Task Template
+ Use gulp/task/template.js to kickstart your own task

### Build & Optimize

```sh
$ gulp studio
```
Run all task essential to compile optimized 'app/' 

```sh
$ gulp build-studio
```

Create distributable application in 'dist/' dir

Run build versions of default task:
+ Styles - Compile SASS, prefix, comb('zen'), minify, check for errors & pipe to dest.
+ Compile-Critical - Inline Critical CSS
+ JS - Minify, Concat & Lint
+ Img - Run imgmin default settings
+ Scaffold - Compile includes & Minify
+ Aux - Grabs misc files parallel to index.html path & provides performance insights w/ pagespeed(Future ver)

## Filesystem 

#### PHP

Custom WP theme titled 'studio' for use with this tool, change the paths in 'gulp/index.js' for custom themes

#### SASS

app/lib/styles for all your styling needs

app/lib/styles/critical/_modules/_critical.scss - Any css written here will be inlined in app/index.html after running 'gulp crit' or if _critical changes after running 'gulp paint'

#### HTML 

Include w/ @@include('included.html')

#### Images

image-min compress files within 'app/lib/img/**/*' on 'gulp build-studio'

#### JS

Automatic minification on build 
Files concat with concat.js and additonal js files can be added @ gulp/index.js under sourced.jslib var

#### Creating new task

To create a new gulp task, create a newTask.js file and add this to gulp/task/

Task boilerplate:

```sh
var gulp = require('gulp');

gulp.task('newTask', function () {

    return gulp.src(sourced.app)
        // do something here
    	.pipe(gulp.dest(dist.dir));
});  
```
Test your task with 

```sh
gulp newTask
```


### Performance

['gulp-changed'](https://www.npmjs.org/package/gulp-changed) runs for relevant gulp task.

Will include node_module [Bench](https://www.npmjs.org/package/bench) for benchmarking in the future

### Gulp Commands

#### Automate w/ Bash

Quick commands for your bash_profile: 

```sh
alias g="gulp"
alias gs="gulp styles"
alias gsb="gulp styles-build"
alias gjs="gulp script"
alias gjsb="gulp script-build"
alias gh="gulp scaffold"
alias ghb="gulp build-scaffold"
alias gb="gulp build"
alias gw="gulp paint"
```

#### Testing

Run 

```sh
gulp test
```

for error checking on 'studio' & 'build-studio' task


### Gulp Studi˚ CLI commands

```sh
# Gulp Studi˚ 
alias g="gulp"
alias gstu="gulp studio"
alias gp="gulp paint"
alias gs="gulp styles"
alias gsb="gulp build-styles"
alias gj="gulp brush"
alias gsc="gulp scaffold"
alias gscb="gulp build-scaffold"
alias ga="gulp aux"
alias gab="gulp build-aux"
alias gc="gulp compile-critical"
alias gic="gulp inline-critical"
alias gb="gulp build-studio"
alias gbs="gulp browser-sync"
alias gptest="gs; gc; gsc; gic; gj; gstu;"
alias buildtest="gsb; gc; gsc; gab; gic; gscb; gj; gb;"
alias ta="gulp test-app"
alias tb="gulp test-build"
alias t="gulp test" 
# http://tinyurl.com/testruntime
# real - start to finish
# user - user mode code
# sys - kernal code
alias test="time runtest"
function runtest {
    ta
    sleep 10
    tb
}
```

Use 'gptest' after running 'gulp paint' to test task w/ browser sync & server

Run 'test' for thorough testing and time reports 

## Config

#### Paths

Global paths are set @ gulp/index.js

## Vendors 

[h5bp](http://html5boilerplate.com/) is baked into easel/index

jQuery 2.1.1 can be found in node_modules/jquery

## Troubleshooting

Contact me

## A Boilerplate-only Option

Remove lib folder & reconfigure source paths in /gulp/task

## Inspiration

Studio is inspired by a desire to build a quick web dev platform with modern tooling & best practices baked in, while leaving the door wide open to build anything possible with HTML, CSS, Javascript and other web technologies.

## Contributing

## Milestones

#### Paint & Easel v 0.1.1 

--- Modules tested: 
+ paint
+ brush
+ browser-sync
+ aux 
+ img
+ scaffold
+ studio
+ styles
+ compile-critical
+ inline-critical
+ prettify-index
+ styles
+ watch
+ studio

Contributions, questions and comments are all welcome and encouraged.

## Credits

[Google Web Starter Kit](https://github.com/google/web-starter-kit)
    Readme template & being the "gold standard"

[Greypants gulp-starter](https://github.com/greypants/gulp-starter)
    Gulp framework & filesystem 
