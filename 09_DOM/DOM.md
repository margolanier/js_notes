# DOM Manipulation
two built-in objects that exist in all browsers

1.	window		= the tab (parent)
2.	document 	= the page (child)

## Events
an **event listener** is a function that waits for an event to occur before running

2 parameters
*	the event name we want to listen for (there are many)
*	what function we want to run when it happens

**query selector** is how we find elements that already exist

1 parameter - the CSS selector for the element you're looking for

## Where to place script
	function init() {

		let button = document.querySelector('#add');
		button.addEventListener('click', ???);
	}

	window.addEventListener('load', init);

define the function before you call it: function init is above the addEventListener()

**anonymous functions**: function without names

	function() {
		console.log('clicked');
	}


	button.addEventListener('click', ???);
	
	button.addEventListener('click', function() {
		console.log('clicked');
	});