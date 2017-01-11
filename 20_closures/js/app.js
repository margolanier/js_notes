/*
 * Pancake Flipping
*/

// Return true 80% of the time
function oneFlip() {
	if (Math.random() <= 0.8) {
		return true;
	} else {
		return false;
	}
	//return Math.random() <= 0.8;
}

// Try three flips in a row
function compete() {
	if (oneFlip()===true && oneFlip()===true && oneFlip()===true) {
		return true;
	} else {
		return false;
	}
	//return oneFlip() && oneFlip() && oneFlip();
}

// Return probablilty of succeeding (number)
function flipper(tries) {
	let victories = 0;
	
	for (let i=0; i<tries; i++) {
		if (compete() === true) {
			victories++;
		}
	}
	
	return victories / tries;
}

console.log(oneFlip());
console.log(compete());
console.log(flipper(8000));


/*
 * CLOSURES
 */
function makeABank() {
	let balance = 0;
	let active = true;
	
	return {
		money: balance, // this uses the concept of closures
		// money: balance + 10; // this wouldn't be a closure
	};
}

// Q: What is the value of bank.money?
// scope of variable 'balance' is preserved after the function is closed
let bank = makeABank();

bank.money = 10; // this uses the concept of closures

balance = 10; // doesn't work, balance isn't defined
console.log(bank.money);


function makeVendingMachine() {
	let money = 100;
	let foods = ['Pepsi', 'Chips', 'Cookies'];
	
	return {
		buy: function() {
			if (foods.length > 0) {
				console.log('all kinds of goodies'); // not a closure
				console.log(foods); // closure
				money = money + 1.25;
				let food = foods.pop(); // remove an item from the vending machine
				console.log('I bought ' + food + '. Machine has $' + money);
			} else {
				console.log('Sorry, no food available. Need to restock.');
			}
			
		},
		restock: function() {
			foods.push('Coke');
			foods.push('Pretzels');
			foods.push('Fruit Snacks');
			console.log(foods);
		},
	};
}

let vm = makeVendingMachine();
vm.buy();
vm.buy();


/*
 * Use cases, why you need a closure here
 */
let vending = {
	money: 100,
	food: [],
};
vending.money = 10000; // Not good idea, closures protect this from happening

/*
 * IIFE's
 */
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
		add: function(name) {
			heroes.push(name[0].toUpperCase() + name.slice(1).toLowerCase());
		},
		announce: function() {
			for (let i=0; i<heroes.length; i++) {
				console.log(heroes[i]);
			}
		}
	}
}());

H.add('mickey mouse');
H.add('IRON MAN');
H.announce();








