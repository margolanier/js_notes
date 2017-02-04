/*
 * Jump Game:
 * Starting at first number in array, determine (T/F) if you can reach the last number.
 * You can jump forward or backwards.
 * You have to jump the number of positions equal to the number.
*/

/*function jumpGame(nums) {
	return jumpFrom(nums, 0, 0);
}*/

/*
 * Need another function that jumps FROM somewhere TO somewhere.
 * Can be forwards or backwards.
 * 
 * jumps = array we atart with (possible jumps)
 * start = where we currently are
*/
/*function jumpFrom(jumps, start) {
	
	// you've made it to the end
	if (start === jumps.length - 1) {
		// YOU WIN!
		return true;
	}
	
	// you've gone past (less than) the first number
	if (start < 0) {
		return false;
	}
	
	// you've gone past (more than) the last number
	if (start >= jumps.length) {
		return false;
	}
	
	if (jumps[start] === 0) {
		return false;
	}
	
	if (trailLength > 50) {
		return false;
	}
	
	const jumpSize = jumps[start];
	*/
	/*
	 * RECURSIVE FUNCTIONS CALL THEMSELVES
	 * jumpFrom() ftn calls jumpFrom() again inside itself
	 */
/*	// jump forwards
	let forward = jumpFrom(jumps, start + jumpSize, trailLength + 1);
	
	// jump backwards
	let backward = jumpFrom(jumps, start - jumpSize, trailLength + 1);
	
	return (forward === true || backward === true);
}

console.log(jumpGame([1, 1, 2 1]));*/

console.log('=============');

function jumpman(array) {
	let start = array[array.length - 1];
	let end = array[0];
	let position = array.length - 1;
	let path = [];
	
	function nextJump(position) {
		// test each possible jump distance from current position (backward and forward)
		// let i = distance (jump size)
		
		let pathsBack = [];
		function backward() {
			for (let i=1; i<position; i++) {
				// if the DISTANCE to the next position is equal to
				// the VALUE of the next position, it is a possible path
				if (array[position - i] === i) {
					// store that index (position - i) in possible paths
					pathsBack.unshift(position - i);
				}
			}
		}
		
		let pathsForward = [];
		function forward() {
			for (let i=1; i<(array.length - 1 - position); i++) {
				if (array[position + i] === i) {
					// store that index (position + i) in possible paths
					pathsForward.unshift(position + i);
				}
			}
		}
		
		if (pathsBack.length + pathsForward.length === 0) {
			return false;
		} else if (pathsBack.length + pathsForward.length === 1) {
			path.push(/*get index of whichever array had a value*/);
		} else {
			// idk, too many options
			// run nextJump() again inside
		}
	}
	
	return 'in progress';
}

let testArray = [1, 2, 4, 1, 1, 2, 1];
console.log(jumpman(testArray));