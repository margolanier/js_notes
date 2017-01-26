/**
 * All data that isn't specific to a single controller should be stored in the service.
 * 
 * Just because its CURRENTLY only used in one controller
 * doesn't mean its EVER only going to be used in one controller.
 */

const app = angular.module('BestBookApp', []);

/* Constructor for creating Books */
function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.cover = null;
    this.id = null;
    this.added = null;
    this.isFavorite = false;
	
    return this;
}

app.controller('NewBookController', function ($scope, BookService) {
    // Default values for our $scope variables
	// Also a convenient list of all the properties we have in our templates
    $scope.title = '';
    $scope.author = '';
    $scope.price = 0;

    $scope.newBook = function () {
        // Need to use $scope because that's the name of the strings I want to use as input
        const brandNewBook = new Book($scope.title, $scope.author, $scope.price);
        BookService.add(brandNewBook);

        $scope.title = '';
        $scope.author = '';
        $scope.price = 0;
    };
});

app.controller('ShowBooksController', function ($scope, BookService) {
    // Get the array at the beginning so we can render it right away
    $scope.books = BookService.getAll();

    $scope.favoriteBook = function (target) {
        console.log(`Marking ${target.title} as a fav`);
        BookService.markAsFavorite(target);
    };
});

// Factories always return services
app.factory('BookService', function($http) {
	
    // Services work because of JS closures: books is preserved throughout lifetime of app
    const books = [];
	
	/*
	 * Promises are a JS pattern to organize asynchronous operations (event-based things)
	 * Instead of lots of callbacks, set the order using then()
	 * 'data' is Angular-specific (returns object with extra info, including http response)
	 */
	
	// GET requests
	$http.get('http://api.queencityiron.com/books').then(function(response) {
		
		angular.copy(response.data.books, books);
		// the 'angular.copy' function above replaces loop below
		/*
			const incoming = response.data.books;
			for(let i=0; i<incoming.length; i++) {
				books.push(incoming[i]);
			}
		*/
		
	});
	
    return {
        // ES6 syntax for function property
        add(book) {
            books.push(book);
			
			// POST requests: sencond arg is data for the body
			$http.post('http://api.queencityiron.com/books', {
				title: book.title,
				author: book.author,
			});
        },
        getAll() {
            return books;
        },
        markAsFavorite(fave) {
            fave.isFavorite = true;
        },
    };
});