/* Build a basic pokemon app that gets pokemon.
 * You can click a 'catch' button to catch them.
 *
 * 1. get data from api
 * 2. format data how you want
 * 3. render data in the dom
 *
 * 1 module for making AJAX request in general
 * 1 module for making pokemon objects from the response
 * 1 module ('pokedom') that does Pokemon-related DOM manipulation
 */


let ajax = require('./ajax'); // general-purpose ajax request module
let pokemonify = require('./pokemonify'); // convert api response to our pokemon object
let pokedom = require('./pokedom'); // show pokemon object in the dom

window.addEventListener('load', function() {
	ajax.get('http://pokeapi.co/api/v2/pokemon', showPokemon);
});

function showPokemon(response) {
	// pokemonify
	let pokemon = pokemonify(response.results);
	console.log(pokemon);
	
	// pokedom
	pokedom.show(pokemon);
}