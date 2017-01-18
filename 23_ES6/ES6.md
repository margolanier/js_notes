# ES6

- Arrow functions
- Template literals
- Default parameters
- Shorthand function properties
- Const variable
- Destructuring
- ES6 modules

## Arrow functions
Arrow functions are shorthand for writing anonymous functions

1. If there's only one param, you can drop the parenteses
2. If there's only one line in function body, you can drop the {} and 'return' term

ES5 vs ES6

	// ES5
	let square = function(num) {
		return num * num;
	}
	
	// ES6
	let square = num => nun * num;

*CAN'T USE ARROW FUNCTIONS WITH 'THIS'

## Template Literals
Template literals are to concatenate strings (with variables)
	function greet(tidings, name) {
		// console.log(tidings + ', fair ' + name); // ES5
		console.log(`${tidings}, fair ${name}`); // ES6
	}
	greet('Good morrow', 'Jacqueline');

With an arrow function

	let greet = (tidings, name) => {
		console.log(`${tidings}, fair ${name}`);
	};
	greet('Good morrow', 'Jacqueline');

## Default Parameters
Declare the default parameter initially and don't have to call that one
	let greet = (tidings, name='Margo') => {
		console.log(`${tidings}, fair ${name}`);
	};
	greet('Good morrow');

## Shorthand Function Properties
	// ES5
	let stoplight = {
		color: 'red';
		red: function() {
			return this.color === 'red';
		}
	};
	
	// ES6
	let stoplight = {
		color: 'red';
		red() {
			return this.color === 'red';
		}
	};

## Const variable
- 'const' is another way to declare a variable
- DOES NOT make a variable unchangeable
- it makes it un-reassignable (can't use '=' again on that variable; it has been set once)

Assigned only once, but then can be changed/altered

	const roster = [];
	roster.push('Luke');

	const user = {
		name: 'Luke',
	};
	user.name = 'Ben';
	const bits = user.split('e');

Use const when document.querySelector and object

## Destructuring

Destructuring an array:  
Instead of naming the new array, you can name each part, and then call them

	const phone = '944 671 4919';
	const [area, first, last] = phone.split(' ');
	console.log(area, area[0]);

Destructuring an object:  

	// ES5
	function showPerson(subject){
		console.log(name);
	};
	
	// ES6
	function showPerson({ name, age, hometown }) {
		console.log(name);
	}
	
	const person = {
		name: 'Forrest',
		age: 31,
		hometown: 'Greenbow, AL',
	};
	showPerson(person);