function init() {
	
	// Version 1: works well for simple DOM elements
	/*let pet = document.createElement('li');
	pet.textContent = 'Angry Parrot';
	
	let parent = document.querySelector('#pets');
	parent.appendChild(pet);*/
	
	// Version 2: works well-sh for more complex structures
	// It's a crutch bc you don't want html in js files
	/*let pet = document.createElement('li');
	pet.innerHTML = '<h2>It\'s a crutch!</h2><p>What\'s up?</p>';
	
	let parent = document.querySelector('#pets');
	parent.appendChild(pet);*/
	
	// Version 3: best way for separation of concerns
	// works better and easier to code
	let pet = document.createElement('li');
	pet.innerHTML = document.querySelector('#pet-template').innerHTML;
	
	let parent = document.querySelector('#pets');
	parent.appendChild(pet);
	
	// Loop through creatures usign mustache html structure
	let creatures = [
		{	name: 'parrot',
			adj: 'angry',	
		},
		{	name: 'falcon',
			adj: 'ugly',
		},
		{	name: 'squirrel',
			adj: 'nutty',
		},
		{	name: 'dog',
			adj: 'slobbery'
		}
	];
	
	for (let i=0; i<creatures.length; i++) {
		console.log(creatures[i]);
		
		let creature = document.createElement('li');
		
		// works without variables
		// creature.innerHTML = document.querySelector('#creatures-template').innerHTML;
		
		// working with mustache
		/*creature.innerHTML = Mustache.render(
			document.querySelector('#creatures-template').innerHTML,
			{creatureName: 'panda', creatureAdjective: 'fuzzy'}
		);*/
		
		// working with mustache and objects
		creature.innerHTML = Mustache.render(
			document.querySelector('#creatures-template').innerHTML,
			{creatureName: creatures[i].name, creatureAdjective: creatures[i].adj}
		);

		let parent = document.querySelector('#creatures');
		parent.appendChild(creature);
	}
	
	// Mustache.render(string, {object})
	// Mustache.render(template-to-show, {values-to-insert})
	// returns a string
	console.log(
		Mustache.render('thanks {{ person }}: the real hero', {person: 'Hodor'})
	);
	//let output 

}

window.addEventListener('load', init);