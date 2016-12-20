# Scope

scope- list of names available in a given code block

all variables and funcitons are created ub a given scope, and only exist as long as the scope exists

in old JS, scopes are created for each function  
in new JS, scopes are created for each block of code between { and }

* global scope  (x, count)
* function count() scope  (max)
* for loop scope (i)


	let x = 5;

	function count(max) {
		for (let i=x; i<max; i++) {
			console.log(i);
		}
	}

	count(15);