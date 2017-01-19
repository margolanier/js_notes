/* 
 * PRACTICE PROBLEM
 * slide() should return an object that returns 2 functions:
 * add() which adds a number to an array
 * get() which returns the average of (up to) the last 3 numbers in the array
*/

// There are 2 possible methods: with a closure and with a constructor

// 1) With a closure
function slide() {
	const numbers = [2];
	
	return {
		add(num) {
			numbers.push(num);
		},
		get() {
			let recent = numbers.slice(Math.max(numbers.length - 3));
			let total = 0;
			recent.forEach(function(num) {
				total += num;
			});
			return total / recent.length;
		},
	};
}

// 2) With a constructor
function Slide() {
	this.nums = [];
	
	this.add = function(num) {
		this.nums.push(num);
		
		if (this.nums.length > 3) {
			this.nums.shift();
		}
	};
	
	this.get = function() {
		let total = 0;
		for (let i=0; i<this.nums.length; i++) {
			total += this.nums[i];
		}
		return total / this.nums.length;
	};
	
	return this;
}

// 3) With prototypes
function Slide() {
	this.nums = [];
	
	return this;
}

Slide.prototypy.add = function(num) {
	this.nums.push(num);

	if (this.nums.length > 3) {
		this.nums.shift();
	}
};

Slide.prototype.get = function() {
	let total = 0;
	for (let i=0; i<this.nums.length; i++) {
		total += this.nums[i];
	}
	return total / this.nums.length;
};

// Call the function
let average = slide();
average.add(1);
average.add(3);
console.log(average.get());