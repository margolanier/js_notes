/*
// Dog Prototype
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


// Default JS prototypes
String.prototype.capitalize = function() {
	let str = this.toString();
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}


window.addEventListener('load', function() {
	// Dog Prototype
	let fido = new Dog('Fido');
	fido.bark();
	fido.eat();
	
	// Game Prototype
	let game = 'NiNtEnDo SiXtY FoUr';
	console.log(game.capitalize());
});
*/


/* Shopping Cart Prototype */
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
Food.prototype = CartItem.prototype;

// Vacations are a type of buyable things
function Vacation(destination, price) {
	this.destination = destination;
	this.price = price;
	this.show = function() {
		return 'Trip to ' + this.destination;
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


/* Stoplight prototype */
/*
function Stoplight(color) {
	this.color = color;
	
	return this; // return the new object
}

// prototypes here
Stoplight.prototype.green = function() {
	return this.color === 'green';
}

Stoplight.prototype.yellow = function() {
	return this.color === 'yellow';
}

Stoplight.prototype.red = function() {
	return this.color === 'red';
}

Stoplight.prototype.change = function() {
	if (this.yellow()) {
		this.color = 'red';
	} else if (this.red()) {
		this.color = 'green';
	} else {
		this.color = 'yellow';
	}
}

window.addEventListener('load', function() {
	let stoplight = new Stoplight('red');
	console.log(stoplight);
});
*/
