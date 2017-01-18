/* Arrow functions */

// ES5
let nums = [4, 6, 2];
nums.map(function(num) {
	return num * num;
});

// ES6
let nums = [4, 6, 2];
nums.map(num => num * num);


// ES5
window.addEventListener('load', function() {
	
});

// ES6
// arrow ftn w no parameters
window.addEventListener('load', () => console.log('hi');
	
});

// arrow ftn w longer body
window.addEventListener('load', () => {
	console.log('hi');
	return hi;
}

// if you have multiple parameters, you need parentheses around them
window.addEventListener('load', (param1, param2) => console.log('hi');

/* Template Literals */
function greet(tidings, name) {
	// console.log(tidings + ', fair ' + name); // ES5
	console.log(`${tidings}, fair ${name}`); // ES6
}
greet('Good morrow', 'Jacqueline');


/* Template Literals */
function greet(tidings, name) {
	// console.log(tidings + ', fair ' + name); // ES5
	console.log(`${tidings}, fair ${name}`); // ES6
}
greet('Good morrow', 'Jacqueline');

let greet = (tidings, name = 'Margo') => `${tidings}, fair ${name}`);