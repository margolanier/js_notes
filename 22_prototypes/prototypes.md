# Prototypes
Every object has a prototype  
A prototype is the parent object that is shared by all instances of the child object

~ Properties shared by **all** instances of an object type, (Team, for example).

1. Constructors create a new instance per object
2. Prototypes create a single instance **for all** instances

Flag Freeze Tag example  
With a Team constructor, if you make 3 new teams, you have 3 identical 'add' functions  
Better if the add function could be shared among teams

	function Team(name) {
		this.name = name;
		this.roster = [];
		this.add = function() {

		};
	}

## Prototype Chain
null => object => living things => **mammals**, reptiles, amphibians => elephant, human, monkey  
null => object => cart item => food, product, vacation

Without prototypes:

	function Dog(name) {
		this.name = name;
		this.bark = function() {
			console.log(this.name + ' goes "bark bark."');
		};
		this.eat = function() {
			console.log(this.name + ' is eating now.');
		};
		return this;
	}

	let fido = new Dog('Fido');
	fido.bark();
	fido.eat();

Move 'bark' and 'eat' to the prototype (built-in property of all functions)  
The prototype of a constructor is shared with all objects constructed with that prototype

With Prototypes:

	function Dog(name) {
		this.name = name;

		return this;
	}

	Dog.prototype.bark = function() {
		console.log(this.name + ' goes "bark bark."');
	};

	Dog.prototype.eat = function() {
		console.log(this.name + ' is eating now.');
	};

	let fido = new Dog('Fido');
	fido.bark();
	fido.eat();

All objects have a shared 'object' property  
(you can use objectName.toString() on any object)

	String.prototype.capitalize = function() {
		let str = this.toString();
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	}

	let game = 'NiNtEnDo SiXtY FoUr';
	console.log(game.capitalize());

*Note: ^ that is BAD PRACTICE to modify types that you did not create  
(bc creators may add a 'capitalize' function, which would be on top of yours)

## Shopping Cart 1
Use this method when the parent prototype will be an empty category
category 'CartItem' is shared with child types horizontally

	// CartItem = stuff in common between all buyable things
	function CartItem() {
		return this;
	}

	CartItem.prototype.price = 1000;
	CartItem.prototype.displayText = function() {
		return this.show();
	}

	// Foods are a type of buyable things
	function Food(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.show = function() {
			return this.name;
		}
		
		// secretly happening
		// this.prototype = Food.prototype;
		return this;
	}
	//Food.prototype = CartItem.prototype;

	// Vacations are a type of buyable things
	function Vacation(destination, price) {
		this.destination = destination;
		this.price = price;
		this.show = function() {
			return 'Trip to ' + this.name;
		}

		return this;
	}
	Vacation.prototype = CartItem.prototype;

	window.addEventListener('load', function() {
		let snack = new Food('Old toast', 15.99, 2);
		let trip = new Vacation('South Africa', 1400.00);

		let cart = [];
		cart.push(snack);
		cart.push(trip);

		for (let i=0; i<cart.length; i++) {
			console.log(cart[i].displayText());
		}
	});

## Shopping Cart 2
Use this method to make the parent prototype more hierarchical  
Create a CartItem to use below

	function CartItem() {
		this.show = function() {
			return this.name;
		};
		return this;
	}
	let item = newCartItem();

	function Food(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		
		return this;
	}
	Food.prototype = item;

	function Vacation(destination, price) {
		this.destination = destination;
		this.price = price;
		this.show = function() {
			return 'Trip to ' + this.name;
		}

		return this;
	}
	Vacation.prototype = item;

	window.addEventListener('load', function() {
		let snack = new Food('Old toast', 15.99, 2);
		let trip = new Vacation('South Africa', 1400.00);

		let cart = [];
		cart.push(snack);
		cart.push(trip);

		for (let i=0; i<cart.length; i++) {
			console.log(cart[i].displayText());
			console.log(cart[i].show());
		}
	});
