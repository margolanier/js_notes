# Promises
Promise: agreeing to do something in the future

- An ES6 alternative to callbacks
- Makes code more readable (linear flow, can pipe any number of then() statements together)
- Used for legacy async tasks (like ajax requests) when you don't know when the task will be completed.  
- The function hasn't completed YET, but you can define what to do after it does run.

**KEY:** One of the major reasons we use callbacks is we need to call a function later (when something else finishes). Often this is asynchronous (meaning its happening as our program keeps running).

A promise represents a value which may be available now, or in the future, or never.

A Promise is a proxy for a value not necessarily known when the promise is created. Instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.


## Promise syntax
A promise is a built-in constructor.  
To create a promise, have to call 'new Promise()  
.then() is a property of all promises (how you specify what happens next)

	var p = new Promise(function(resolve, reject) {
		// Do an async task and then...
		if(/* good condition */) {
			resolve('Success!');
		}
		else {
			reject('Failure!');
		}
	});
	
	p.then(function() { 
		/* do something with the result */
	}).catch(function() {
		/* error :( */
	})

## How it works
**A promise constructor has two parameters: 'resolve' and 'reject'**  
When you pass in a function to the constructor, the function has to either:
1. work ('resolve' = task to complete on success)
2. not work ('reject' = task to complete on error)  

Have to manually set these function tasks.  
A pending promise can either be fulfilled with a value, or rejected with a reason (error).

	function get(url) {
		// Return a new promise.
		return new Promise(function (resolve, reject) {
			var req = new XMLHttpRequest();
			req.open('GET', url);
			
			req.onload = function() {
				// Check the status
				if (req.status == 200) {
					// Resolve the promise with the response text
					resolve(req.response);
				} else {
					// Otherwise reject with the status text
					reject(Error(req.statusText));
				}
			};
			
			req.send();
		});
	}

**Async**  
Program keeps running while the promise is waiting to be run  
1. 'hello' will print first
2. while request is completing, 'good morning' will print
3. request finishes loading, runs the following promises (including print 'goodnight')


	console.log('hello');
	$http.get()
		.then(func1) // JSON.parse
		.then(func2) // update dom
		.then(func3); // add event listeners to new buttons
		.then(function() {
			console.log('goodnight');
		})
	console.log('good morning');