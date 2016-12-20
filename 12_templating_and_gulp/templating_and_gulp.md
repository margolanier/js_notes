# Templating and Gulp

Templating:
1.	simplify DOM creation

Version 1: for simple DOM elements
	
	document.createElement('li');
	pet.textContent = 'Angry Parrot';
	
	let parent = document.querySelector('#pets');
	parent.appendChild(pet);
	
Version 2: works well-sh for more complex structures  
It's a crutch bc you don't want html in js files  
	
	pet.innerHTML = ... with HTML tag elements
	
Version 3: mustache.js = separation of concerns  
Add the structure in your head script tag
Bring the string from your html to your js file
	
	let pet = document.createElement('li');
	pet.innerHTML = document.querySelector('#pet-template').innerHTML;
	
CDN: content delivery network
	
Gulp:


