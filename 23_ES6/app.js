window.addEventListener('load', () => {
	getPeeps(showPeeps);
});

/* Call 'success' once we get peeps */
function getPeeps(success) {
	const request = new XMLHttpRequest();
	request.open('GET', 'https://randomuser.me/api/?results=50');
	request.addEventListener('load', () => {
		const {results} = JSON.parse(request.responseText);
		// console.log(results);
		
		// if you want to use make variable named 'data' using the results property
		// const {results: data} = JSON.parse(request.responseText);
		// console.log(data);
		
		// console.log(results.map(person => person.email));
		
		// convert the complex person object into a simpler one
		// create a Peep constructor
		const peeps = results.map(person => new Peep(person));
		success(peeps);
	});
	request.send();
}

function Peep(raw) {
	this.name = `${raw.name.first} ${raw.name.last}`;
	this.location = `${raw.location.city}, ${raw.location.state}`;
	this.image = raw.picture.medium;
	
	return this;
}

const showPeeps = peeplist => {
	// console.log(peeplist);
	const parent = document.querySelector('#peeps');
	
	// clear list of all peeps in the DOM
	parent.innerHTML = '';
	
	// re-render all peeps in peeplist
	peeplist.forEach(peep => {
		const li = document.createElement('li');
		li.innerHTML = Mustache.render(
			document.querySelector('#peeps-template').innerHTML,
			peep // the current item from the array
		);
		parent.appendChild(li);
	});
};