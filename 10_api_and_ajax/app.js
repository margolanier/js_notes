function start() {
	let button = document.querySelector('#find-reader');
	button.addEventListener('click', getNewReader);
}

function getNewReader() {
	let request = new XMLHttpRequest();
	
	request.open('GET', 'https://randomuser.me/api/?results=100');
	
	request.addEventListener('load', function() {
		
		let response = JSON.parse(request.responseText);
		for(let i=0; i<response.results.length; i++) {
			let user = response.results[i];
			showPerson(user);
		}
		
	});
	
	request.send();
}

function showPerson(user) {
	let name = document.createElement('li');
	name.textContent = user.name.first + ' ' + user.name.last;
	
	let list = document.querySelector('#readers');
	list.appendChild(name);
	
}

window.addEventListener('load', start);