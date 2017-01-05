// Callback practice
function sayIt(thing) {
	console.log('I say: ' + thing);
}

function beWise(phrase, say) {
	say('a wise person once said ' + phrase);
	// => sayIt ('a wise person once said a penny saved is a penny earned.')
}

beWise('a penny saved is a penny earned.', sayIt);
// I say: a wise person once said a penny saved is a penny earned.


// Built-in JS library
/*let document = {
	querySelector: function(selector) {
		// do DOM things
	},
	createElement: function(tagName) {
		// create element
	},
};*/


let ajax = {
	get: function(url, show) {
		let request = new XMLHttpRequest();
		request.open('GET', url);
		request.addEventListener('load', function() {
			let response = JSON.parse(request.responseText);
			show(response);
		});
		request.send();
	},
	post: function(url, message, show) {
		let request = new XMLHttpRequest();
		request.open('POST', url);
		let body = JSON.stringify(message);
		request.addEventListener('load', function() {
			this.get(url, show);
		});
		request.send(body);
	},
}
window.addEventListener('load', function() {
	ajax.get('http://api.queencityiron.com/books', showBooks);
	
	let message = {title: 'Title', author: 'Author',};
	ajax.post('http://api.queencityiron.com/books', message, showBooks);
	
	/*
	get('http://api.queencityiron.com/trinkets', showTrinkets);
	get('http://api.queencityiron.com/superheroes', showSuperheroes);
	get('http://api.queencityiron.com/chats', showChats);
	*/
});


function showBooks(info) {
	console.log('showing books');
	console.log(info);
}

function showTrinkets(info) {
	console.log('showing trinkets');
	console.log(info);
}

function showSuperheroes(info) {
	console.log('showing superheroes');
	console.log(info);
}

function showChats(info) {
	console.log('showing chats');
	console.log(info);
}
