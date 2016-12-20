/*
 * Car lot object example
 */

// Return a smaller car (size 1)
function makeSmallCar(paintColor) {
	return {
		size: 1,
		color: paintColor,
	}
}

let zippy = makeSmallCar('pink');
let drifter = makeSmallCar('green');
let shelby = makeSmallCar('gold');

console.log(zippy);
console.log(zippy.color);
console.log( makeSmallCar('red') );

// Return a larger car (size 4)
function makeLargeCar(paintColor) {
	return {
		size: 4,
		color: paintColor,
	}
}

let smallCar = {
	size: 1,
	color: 'white',
};

let largeCar = {
	size: 4,
	color: 'beige',
};

let lot = {
	cars: [], // lot.cars is an empty array
};

/*lot.cars.push(zippy);
lot.cars.push(drifter);*/
lot.cars.push(zippy, drifter, shelby, smallCar, largeCar);

console.log(lot.cars.length);


// Find out how many spaces are filled in specific lot
function spacesFilled(specificLot) {
	console.log(specificLot);
	let total = 0;
	
	for(let i=0; i<specificLot.cars.length; i++) {
		let car = specificLot.cars[i];
		total += car.size; // total = total + car.size;
	}
	return specificLot.cars.length;
}

console.log( spacesFilled(lot) );



/*
 * Practice problem
 */
function headliner(string) {
	let words = string.split(' ');
	
	for (let i=0; i<words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
	}
	
	return words.join(' ');
}
console.log( headliner('this is a title') );
