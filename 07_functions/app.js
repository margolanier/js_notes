function doubleMyMoney(amount, taxRate, compoundedInterestRate) {
	return amount * 2;
}

// CALL the function to run it
let balance = doubleMyMoney(100, 5, 1);



function product(first, second) {
	return first * second;
}
product(5,4);



// Change Machine example
function makeChange(amount) {
	let change = [0, 0, 0, 0];

	change[0] = Math.floor(amount/20);
	amount = amount % 20;

	change[1] = Math.floor(amount/10);
	amount = amount % 10;

	change[2] = Math.floor(amount/5);
	amount = amount % 5;

	change[3] = amount;
	
	return change;
}

makeChange(66);
makeChange(114);

let output = makeChange(66);
console.log(output);



/* Write a function that returns number of X's in a string
 * Inputs: a string
 * Outputs: a number
 */

function returnWordXs(word) {
	let freq = 0;
	
	// Loop through letter and count X's
	for (let i=0; i<word.length; i++) {
		
		// Capitalization matters
		if (word[i] === 'x' || word[i] === 'X') {
			freq++;
		}
	}
	
	// Don't forget to RETURN the output
	return freq;
}

let numXs = returnWordXs('x123x');
console.log(numXs);



/* PRACTICE */
console.log('');
console.log('PRACTICE');
/* Write a function that accepts an array of numbers and returns the average */

function calculateAvg(numbers) {
	let sum = 0;
	
	for (let i=0; i<numbers.length; i++) {
		//sum = sum + numbers[i];
		sum += numbers[i];
	}
	
	return sum / numbers.length;
}

let avg = calculateAvg([1, 8, 2, 5]);
console.log('Avg: ' + avg);


/* Fizzbuzz */
function fizzbuzz(max) {
	for(let i=1; i<=max; i++) {
		if (i%3 === 0 && i%5 === 0) {
			console.log('fizzbuzz');
		} else if (i%3 === 0) {
			console.log('fizz');
		} else if (i%5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
}
fizzbuzz(15);