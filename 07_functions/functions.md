# Functions
functions: processes  
variables: data

## Benefits
* naming
* grouping similar ideas in one place
* DRY

	input --> process --> output  
	parameters --> function --> return
	
**return stores the the data**  
**console.log prints the data**

no limit to amount of parameters

**Change machine example:**

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

## Logical operators
&& : and  
|| : or  
! not

*return** means the function is complete.  it stops the function and no code under will execute.

### split()
arithmatic : number :: split : string
split sentence at spaces into array of words

	let sentence = 'this is a sentence of words'
	
	let words = entence.split(' ')
	// split string at spaces gets you words['this', 'is', 'a', 'sentence']
	
	let letters = entence.split('')
	// split string with no space gets you letters['t', 'h', 'i', 's', ' ', 'i', 's', ' ']

