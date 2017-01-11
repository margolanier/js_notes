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