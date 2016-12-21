import test from 'ava';
// tests are functions that run your own code
// the goal of writing tests is to break things
// test for every code path (pass and fail an 'if' statement)
// other tests for ajax requests(mocking) and button clicks(UI)

test('test that two numbers are the same', function(trial) {
	// 1. create a new test
	// 2. set up different 'trials' that the text should evaluate
	// 3. example trial: check that the return value of returns as expected (use assertions)
	trial.is(2, 2);
	
});

// use .is for boolean
// use .deepEqual for arrays


/*
 * Test case 1
 */
function tallestMountain(heights) {
	if (heights.length === 0) {
		return null;
	}
	
	let tallest = heights[0];
	
	for (let i=1; i<heights.length; i++) {
		if (tallest < heights[i]) {
			tallest = heights[i];
		}
	}
	
	return tallest;
}

/*test('find the tallest mountain', function(trial) {
	trial.is(tallestMountain([5, 1, 8, 3]), 8);
	trial.is(tallestMountain([14, 5, 1, 8, 3]), 14);
	
	// edge cases
	trial.is(tallestMountain([-14, -5, -8, -3]), -3);
	trial.is(tallestMountain([]), null);
});*/


/*
 * Test case 2
 */
function greaterThan(one, two) {
	
	// Check inputs
	if ( typeof(one) != number || typeof(two) != number ) {
		return undefined;
	} else {
		
		// Continue
		if (two > one) {
			return true;
		} else {
			return false;
		}
	}
	
}


test('is the second greater than the first?', function(trial) {
	// 2 inputs?
	// both numbers?
	// same number?
	
	trial.is(greaterThan(1, 2), true);
	trial.is(greaterThan(2, 2), false);
	trial.is(greaterThan(2, -2), false);
});


/* Pokemon

1. can you start on any day but 0 or 1?
2. check that the number you lose can never be more than the number you have
3. can you lose pokemon
4. if input is negative, but not allowed, do you get error msg?
*/
function pokemon(caught) {
	let sum = 0;
	let totalCaught = [];
	
	for(let i=0; i<caught.length; i++) {
		sum = sum + caught[i];
		totalCaught.push(sum);
	}
	return totalCaught;
}

test('pokemon', function(trial) {
    trial.deepEqual(pokemon([1, 2, 5, 1, 3]), [1, 3, 8, 9, 12]);
    trial.deepEqual(pokemon([1, 4, 7, 10, 14]), [1, 5, 12, 22, 36]);
    trial.deepEqual(pokemon([1, 0, 7, 10, 0]), [1, 1, 8, 18, 18]);
    trial.deepEqual(pokemon([1, -1, 7, 10, -3]), [1, 0, 7, 17, 14]);
    trial.deepEqual(pokemon([0, 0, 0, 0, -3]), [0, 0, 0, 0, 0]);
    trial.deepEqual(pokemon([1, -1, 7]), [1, 0, 7]);
    trial.deepEqual(pokemon([1, -1, 7, 10, -3, 20, 2]), [1, 0, 7, 17, 14, 34, 36]);
});
