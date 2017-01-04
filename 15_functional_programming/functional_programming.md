# Functional Programming

## Pure functions
Big idea: use pure functions as often as possible because pure functions are **predictable**

'pure function' is a function with no side effects

## Side effects
- DOM manipulation
- AJAX requests
- Changing global variables

## Callbacks
**callback** is a function passed as input that will be called at a later time

when a function uses a callback as a parameter, you aren't returning a value, you are returning instructions

example 1

	window.addEventListener('load', init);
	
	function init() {
		// do things
	}
	
example 2

	function doMath(func) {
		return 3 + func(5);
	}
	
	console.log(
		doMath(function(zebra) {
			return zebra * zebra;
		}
	);
	// 3 + (5^2) = 28

## Callback Methods
functional programming involves a set of tools similar to things we've used in the past (loops)

these are alternatives to loops (not better or worse)

array.map(func)	=> return new array w func applied to each item

- use map when you want to modify items in array
- performs function on every element (lets everything through)
- output.length === input.length

ex. 1

	let mountains = [91, 55, 70, 100];
	
	function erode(height) {
		return height - 3;
	}
	
	mountains.map(erode); // returns [88, 52, 67, 97]

array.filter(func)	=> return new array w items when func returns true

- callback to filter MUST retun true or false
- true means keep
- false means discard
- filter cannot change values, only keeps or discards

ex. 2

	function isBig(height) {
		if (height > 90) {
			return true;
		} else {
			return false;
		}
	}
	
	mountains.filter(isBig); // returns [91, 100]

## Chaining
