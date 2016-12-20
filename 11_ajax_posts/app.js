function init() {
	getBooks();
	
	let submit = document.querySelector('#add-book');
	submit.addEventListener('click', addBook);
}

function getBooks() {
	let request = new XMLHttpRequest();
	
	request.open('GET', 'http://api.queencityiron.com/books');
	
	request.addEventListener('load', function() {
		
		let response = JSON.parse(request.responseText);
		
		// Loop over books and create an <li> for each one
		let parent = document.querySelector('#books');
		
		for(let i=0; i<response.books.length; i++) {
			let el = document.createElement('li');
			el.textContent = response.books[i].title + ', by ' + response.books[i].author;
			parent.appendChild(el);
		}
		
	});
	
	request.send();
}

function addBook() {
	let request = new XMLHttpRequest();
	
	request.open('POST', 'http://api.queencityiron.com/books');
	
	let body = JSON.stringify({
		title: document.querySelector('#bookTitle').value,
		author: document.querySelector('#bookAuthor').value,
	});
	
	document.querySelector('#bookTitle').value = '';
	document.querySelector('#bookAuthor').value = '';
	
	request.addEventListener('load', function() {
		getBooks();
	});
	
	request.send(body);
	
}

window.addEventListener('load', init);