# Modules

- **Modules** : JS :: Partials : Sass
- Allows us to break our code into multiple files => easier to stay organized and reuse code

Reasons to put things in modules

- reuse code in multiple files
- logically break up your code into smaller pieces
- readability for other people using your code

need to install 'browser' to use require()  
*browserify* converts 'require()' into code browsers can understand

in js/currency.js file (module):

	let labels = {
		us: 'dollars',
		uk: 'pounds',
		de: 'euro',
	};

	let countires = [
		'switzerland',
		'vietnam',
	]

	module.exports = labels;

in app.js file, require all modules

- if you start with a ./ it will look in YOUR code
- if you don't, it will look in node_modules

in app.js file:

	let monies = require('./currency');
	console.log(monies);