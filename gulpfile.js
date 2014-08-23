/*
  gulpfile.js
  ===========
  Rather than managing one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any file in that folder gets automatically
  required by the loop in ./gulp/index.js.

  To add a new task, make a copy of template.js and add it to gulp/tasks.

	Credit to:
	Greypants https://github.com/greypants/gulp-starter for the filesystem structure

*/


require('./gulp');
