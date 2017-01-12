# Objects 2.0

#### this, Constructors, and Prototypes

***
## this
**this** = refers to the object a function was called on

in Object Oriented (OO) dev, group things based on the object they're related to

'this' is the context variable.  it is the context that you are running the function in.  if you remove the object that the function is called on, 'this' doesn't have a value

	let person = {
		name: 'Jed',
		food: 90,
		status: function() {
			console.log(this.name + ' is healthy with ' + this.food + ' food.');
		}
	}
	
	person.status();
	let stat = person.status; // <= this is a function
	stat(); // <= this is out of context now, there is no 'person' object calling the function

## Constructors

**constructor** = function with a few special features

	newXmlHttpRequest()
	new Regex()
	new Date()

special features
1. call it by using the 'new' keyword
2. name is capitalized by convention
3. 'this' is set to a new object (the thing being constructed)
4. 'return' happens automatically
5. new object's prototype is set to ConstructorName.prototype

any problem that has nouns (user, cart, game character) can probably use 

Oregon trail example

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