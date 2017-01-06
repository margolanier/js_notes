/*
 * input: list of pokemon from server
 * output: */

function cleanup(pokes) {
	return pokes.map(nameOnly);
}

function nameOnly(pokemon) {
	return pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();
}

module.exports = cleanup; // exporting the function, not running it