# Closures and IIFE's

Two very common ways to use scopes in JS.  Closures are one of the most revered features in the JS language.

## Closures
Closure = preserving a function's scope after the function finishes executing (to be used later)

**if the variable can be deleted after the function is run and not alter anything, not a closure.  if it would affect function, uses closure.

By default, computers only want to keep the data that could be refrenced later (saves memory). Closures exists to tell the comp to keep that variable.

### Principle of Least Privilege
Give the LEAST amount of ACCESS to the variables to PROTECT them.  
You are limiting the amount of places it can go wrong.

In Java there are public and private variables.
- The variables are related so you shouldn't be able to globally call/change one individually.
- Need to declare specific vending operations that can alter those variables (running 'buy' or 'restock' ON the vending machine object will alter both money and food appropriately)

Vending machine will have methods 'buy' and 'restock' to perform actions on 'foods' and 'money'.


	function makeVendingMachine() {
		let money = 100;
		let foods = ['Pepsi', 'Chips', 'Cookies'];

		return {
			buy: function() {
				money = money + 1.25;
				foods.pop() // remove an item from the vending machine
			}
		}
	}

	let vending = {
		money: 100,
		food: [],
	};

	vending.money = 10000; // not good to change this globally, the food value should always change with the money value

	let vm = makeVendingMachine();
	vm.buy();


## IIFE ('iffy')
IIFE = 'Immediately Invoked Function Expression'

	// Normal
	function greet() {
		console.log('good day');
	};
	
	greet();
	
	// IIFE
	(function() {
		console.log('good day');
	}());

** it's a wrapper (that you wouldn't noramlly have) when you need a scope (to remove variables from global scope) 
Anonymous function (no need to name it is you are calling it right after)

	(function() {
		let heroes = ['Superman', 'Batman', 'Catwoman'];
	}());

jQuery is wrapped in one giant IIFE

	(function() {
		let $ = function(){};
	}());

## Use case

	let H = (function() {
		let heroes = [
			'Superman',
			'Batman',
			'Catwoman'
		];
		
		return {
			count: function() {
				return heroes.length;
			},
		}
	}());

declaring H gives us a name in which to reference 'count'  
it's the access point

