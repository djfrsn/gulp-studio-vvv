var fs = require('fs');
	onlyScripts = require('./util/scriptFilter');
	tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
	setup = {
		studio: [
        './gulp-studio/**/**/**/**/*.*'
    	],
		root: './'
	}
	sourced = {
		app: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/',
		php: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/**/**/*.php',
		font: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/lib/fonts/**/*',
		img: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/images/**/*',
		sass: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/scss/**/*.scss',
		css: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/scss/paint.css',
		criticalSASS: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/scss/critical/**/*.scss',
		criticalCSS: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/scss/critical/critical.css',
		criticaldir: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/scss/critical/',
		styles: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/',
		brush: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/js/brush/brush.js',
		brushdir: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/js/brush/', 
		jsdir: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/js/brush/**/*.js',
		jslib: [ 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/js/brush/vendor/*.js', 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/js/brush/components/component.js' ], // js is concatenated from left to right 
		ignoreSASS: '!vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/scss/**/*.scss',
		ignoreCritCSS: '!vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/scss/critical/*.css',
		ignoreCritSASS: '!vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/scss/critical/**/*.scss'
	};
	dist = {
		styles: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/',
		js: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/js/brush/',
		font: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/lib/fonts/',
		img: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/images/',
		aux: [ 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/humans.txt', 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/robots.txt', 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/favicon.ico' ],
		dir: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/studio/'
	};

tasks.forEach(function(task) {
	require('./tasks/' + task);
});
