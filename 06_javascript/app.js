// Variable
let balance = 100; // represent a concept
balance = balance - 10; // number variable

//console.log(balance);

let user = 'Oliver'; // string

//console.log(user + 10); // prints Olivia10, treats 10 as string

//let job = 'construction worker';
let employed = true; // boolean
let job = null;
job = 'construction worker';

//console.log(user + ' is a ' + job); //concatentation of 3 strings

// Conditional: do this IF something is true
if (employed) {
	//console.log(user + ' is a ' + job);
} else {
	//console.log(user + ' needs a job.');
}

if (job !== null) {
	//console.log(user + ' is a ' + job);
} else {
	//console.log(user + ' needs a job.');
}

// Arrays
let prices = [];
prices = [1.17, 91.01, 14.51, 19.99];
//console.log(prices);

console.log(prices[0]); //  0 is an index

/*for(let i=0; i<5; i=i+1) {
	console.log(prices[i]);
}*/

// When you don't know how many items are in the array
let sum = 0;
for(let i=0; i<prices.length; i++) {
	sum = sum + prices[i];
}
console.log(sum);


