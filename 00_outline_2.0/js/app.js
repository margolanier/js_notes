let ajax = require('./ajax');
let display = require('./render'); 

window.addEventListener('load', function() {
	ajax.get('http://pokeapi.co/api/v2/pokemon', show);
});

function show(response) {
	let results = response.results;
	console.log(results);
	
	display.show(results);
}