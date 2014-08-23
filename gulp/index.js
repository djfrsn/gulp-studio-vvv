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
		app: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/',
		php: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/**/**/*.php',
		font: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/lib/fonts/**/*',
		img: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/images/**/*',
		sass: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/**/*.scss',
		css: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/paint.css',
		criticalSASS: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/critical/**/*.scss',
		criticalCSS: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/critical/critical.css',
		criticaldir: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/critical/',
		styles: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/',
		brush: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/js/brush/brush.js',
		brushdir: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/js/brush/', 
		jsdir: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/js/brush/**/*.js',
		jslib: [ 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/js/brush/vendor/*.js', 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/js/brush/components/component.js' ], // js is concatenated from left to right 
		ignoreSASS: '!vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/**/*.scss',
		ignoreCritCSS: '!vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/critical/*.css',
		ignoreCritSASS: '!vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/critical/**/*.scss'
	};
	dist = {
		styles: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/css/styles/',
		js: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/js/brush/',
		font: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/lib/fonts/',
		img: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/images/',
		aux: [ 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/humans.txt', 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/robots.txt', 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/favicon.ico' ],
		dir: 'vvv/vagrant-local/www/studio/htdocs/wp-content/themes/twentyfourteen/'
	};

tasks.forEach(function(task) {
	require('./tasks/' + task);
});
