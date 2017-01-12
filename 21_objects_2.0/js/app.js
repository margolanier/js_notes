/*
 * 'THIS'
 */
let person = {
	name: 'Jed',
	food: 100,
	isHealthy: function() {
		return this.food < 0;
	},
	eat: function() {
		console.log(this.name + ' is eating.');
		this.food -= 10;
	},
	status: function() {
		if (this.isHealthy) {
			console.log(this.name + ' is healthy with ' + this.food + ' food.');
		} else {
			console.log(this.name + ' is sick with ' + this.food + ' food.');
		};
	}
};

let person2 = {
	name: 'Sarah',
	food: 50,
	isHealthy: function() {
		return this.food < 0;
	},
};

person.eat();

person.status();
let stat = person.status; // <= this is a function
/* 'this' refers to the object that the function was called on */
stat();

person2.status = stat;
person2.status();



/*
 * CONSTRUCTORS
 */
function Traveler(name) {
	this.name = name;
	this.food = 100;
	this.happiness = 60;
	
	this.eat = function() {
		console.log('nom nom');
		this.food -= 10;
		console.log(this.name + ' has ' + this.food + ' food left.');
	}
	
	return this; // technically optional
}

// create a new 'Traveler' object using a contructor
let adventurer = new Traveler('Bob');
console.log(adventurer.name);

let party = [
	new Traveler('Amanda'),
	new Traveler('Bill'),
	new Traveler('Caitlin'),
	new Traveler('Doug'),
];

// Caitlin's eat function
party[2].eat();


// create a new 'Wagon' object using a contructor
function Wagon() {
	this.capacity = 5;
	this.travelers = [];
	
	this.add = function(person) {
		if (this.travelers.length < this.capacity) {
			this.travelers.push(person);
		}
	};
	
	this.count = function() {
		return this.travelers.length;
	}
	
	this.food = function() {
		let stockpile = 0;
		this.travelers.forEach(function(person) {
			stockpile += person.food;
		});
		return stockpile;
	}
	
	return this;
};

let cruiser = new Wagon();
party.forEach(function(person) {
	cruiser.add(person);
});
console.log('Wagon contains ' + cruiser.count() + ' travelers with ' + cruiser.food() + ' food.');



/*
 * Practice Problem, functional programming
 */
function chemistry(element, abbrev) {
	// convert to lowercase
	full = element.toLowerCase();
	short = abbrev.toLowerCase();
	
	// test to make sure the length of the abbrev is 2
	function length() {
		return short.length === 2;
	}
	
	// test to make sure both letters appear in the right order
	function letters() {
		return full.includes(short[0]) && full.includes(short[1]);
	}
	
	// test to make sure letters appear in the right order
	function order() {
		return full.indexOf(short[0]) < full.indexOf(short[1]);
	}
	
	// test that all conditions pass
	console.log(length(), letters(), order());
	return length() && letters() && order();
}

let isValid = chemistry("coffee", "Ce");
console.log(isValid);