// WITH CALLBACKS
window.addEventListener('load', function () {
	const button = document.querySelector('#submit');
	// click event listener
	button.addEventListener('click', function () {
		const req = new XMLHttpRequest();
		req.open('...');

		// when the ajax request comes back:
		req.addEventListener('load', function () {
			// create a new button with a callback
			const newButton = document.createElement('button');
			newButton.addEventListener('click', function () {
				// do something here
			});
		});
	});
});

// WITH PROMISES (newer alternative to callbacks)
console.log('good day');
$http.get()
	.then(func1) // JSON.parse
	.then(func2) // update dom
	.then(func3); // add event listeners to new buttons
console.log('hello');

/*
 * getBooks is a Promise object
 * for every step of the promise (every then() statement):
 * we can return something to pass into the next then() step.
 */
const getBooks = new Promise(ajaxBooks);

getBooks.then(function (results) {
	return results.books; // 'results' are coming from 'response' in ajaxBooks()
}).then(function (books) {
	console.log(books);
}).catch(function () {
	console.log("FAIL");
});

getBooks
	.then(results => results.books)
	.then(books => console.log(books))
	.catch(() => console.log("FAIL"));


// Ajax request to get books
// Functions we're making promises on have to either call 'worked()' or 'didntWork()'
function ajaxBooks(success, failure) {
	const request = new XMLHttpRequest();
	request.open('GET', 'http://api.queencityiron.com/books');
	request.addEventListener('load', function () {
		const response = JSON.parse(request.responseText);
		success(response); // 'response' is passed on to next then().
	});
	request.send();
}