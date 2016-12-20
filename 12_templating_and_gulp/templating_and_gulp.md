# JS Things: Templating, Gulp

## Templating: simplifies DOM creation

Version 1: for simple DOM elements
	
	document.createElement('li');
	pet.textContent = 'Angry Parrot';
	
	let parent = document.querySelector('#pets');
	parent.appendChild(pet);
	
Version 2: works well-ish for more complex structures  
It's a crutch bc you don't want html in js files  
	
	pet.innerHTML = ... with HTML tag elements
	
Version 3: mustache.js = separation of concerns  
Add the structure in your head script tag
Bring the string from your html to your js file
	
	let pet = document.createElement('li');
	pet.innerHTML = document.querySelector('#pet-template').innerHTML;
	
CDN: content delivery network
	
## Gulp: build tool
sass build tool works only for sass  
gulp build tool works for everything
* sass
* removing white space
* removing comments
* shortening variable names 
* converting browser commands to work on old browsers


	npm install -g gulp

Requirement:
* you must have a gulpfile.js

The purpose of a gulpfile is to describe 'tasks' for converting from dev to prod view  
(read in gulpfile => remove comments => output to public directory)

	let gulp = require('gulp');

Organized into tasks
(need a 'default' task to run when called in terminal)

	
	gulp.task('default', function() {
		// gulp.src() is how you read files
		// gulp.dest() is how you write files
	});


"task"
  |
.scss
  |
convert to css
  |
remove comments
  |
strip whitespace
  |
write to new file

### Gulp organization
1.	gulpfile down into 4 tasks: default, html, css, js
2.	default is umbrella task that calls subtasks

### Some gulp plugins
*	babel- converts modern js into old school js
*	sass
*	strip- remove comments