module.exports = {
	show: function(subjects) { // 'subjects' is array of pokemon names
		
		let ul = document.querySelector('#pokemon');
		
		/* use 'forEach' instead of 'map' to run through array
		and create dom side effect instead of new array */
		subjects.forEach(function(pokemon) {
			let li = document.createElement('li');
			li.textContent = pokemon;
			ul.appendChild(li);
		});
		
	},
	
	hide: function(subjects) {
		
	}
};