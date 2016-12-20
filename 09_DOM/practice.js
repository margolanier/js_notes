function init() {
	
	/* Header */
	let header = document.querySelector('header');
	
	let heading = document.createElement('h1');
	heading.textContent = 'Places';
	header.appendChild(heading);
	
	let subheading = document.createElement('subheading');
	subheading.classList.add('author');
	subheading.textContent = 'By me';
	header.appendChild(subheading);	
	
	
	/* Section */
	let section = document.querySelector('section');
	
	let list = document.createElement('ul');
	section.appendChild(list);
	
	// Places
	let places = ['New Mexico', 'Maine', 'Guatemala', 'Cuba'];
	
	for (let i=0; i<places.length; i++) {
		let item = document.createElement('li');
		item.textContent = places[i];
		list.appendChild(item);
	}
	
	
	/* Footer */
	let footer = document.querySelector('footer');
	
	let copyright = document.createElement('p');
	copyright.textContent = 'Copyright 2016';
	footer.appendChild(copyright);
	
}

window.addEventListener('load', init);