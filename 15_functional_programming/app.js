// CALLBACKS
// (passing functions as parameters)

// math
function addTwo(num) {
	return num + 2;
}

function multi(num) {
	return num * 3;
}

function doMath(func) {
	return 3 + func(5);
}

console.log(doMath(addTwo));
// 3 + (5 + 2) = 10

console.log(doMath(multi));
// 3 + (5 * 3) = 18

console.log(doMath(function(x) {
	return x * 4;
}));
// 23

console.log(doMath(function(zebra) {
	return zebra * zebra;
}));
// 28


// strings
function greet(name, prepare) {
	return 'Good day, ' + prepare(name);
}

function proper(name) {
	return 'Lord or Lady ' + name;
}

function cordial(name) {
	return 'Mr. or Ms. ' + name;
}

console.log(greet('Fatimah', proper));
// Good day, Lord or Lady Fatimah

console.log(greet('Joe', cordial));
// Good day, Mr. Joe


// more math
let prices = [1.10, 5.41, 9.99];

function modify(nums, op) {
	for (let i=0; i<nums.length; i++) {
		nums[i] = op(nums[i]);
	}
	
	return nums;
}

function increase(num) {
	return num + 1;
}

console.log( modify([1.10, 5.41, 9.99], increase) );
/*for (let i=0; i<nums.length; i++) {
	// nums[i] = increase(nums[i]);
	nums[i] = nums[i] + 1;
}
return nums;*/
// logs [2.10, 6.41, 10.99]


/* REASON TO CHAIN */

/* shoe store:
 * members get 20% off
 * shoes are filtered by 'less than 100'
 * print out shoe prices
 * order matters bc filter the discounted price
*/
let shoes = [14, 180, 300, 110, 87];

// 1. map to apply discount
// 2. filter array down to the cheaper shoes
// 3. map to add $ to each
function discount(price) {
	return price * 0.8;
}

function cheaper(price) {
	return price < 100;
}

function addDollars(price) {
	return '$' + price.toFixed(2);
}

/*let display = shoes.map(discount);
display = display.filter(cheaper);
display = display.map(addDollars); */

let display = shoes.map(discount).filter(cheaper).map(addDollars);
console.log(display);