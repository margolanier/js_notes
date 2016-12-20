# Javascript
General service programming language

## Control flow
1.	Normal control flow - goes from top to bottom
2.	Conditionals - allow you to split/fork at a decision/calcualation  
3.	Loops - go in a circle, repeats

## Variables
1.	*let* : block-scoped (local)
2.	*var* : global-scoped (global)
3.	*const* : block-scoped and can't be changed

## Conditionals
Conditionals allow you to split/fork at a decision/calcualation  

	if () {
		// block 1
	} else {
		// block 2
	}

block 1 and 2 aare mutually exclusive- they can never run together

## Expression
**expression** = logic that evaluates down to a value  
ex. value (job) can start as null and be reassigned to a value (construction worker)

= : assignment (make a statement)
=== : equality operator (asks a question)

== : used less often, doesn't take into account the data type

	if 10 === '10' {
		// not true, bc 10 is number and '10' is string
	}
	
	if 10 == 10 {
		// true, bc they "loosely" equal
		// as opposed to stricly/absolutely equal (===)
	}

## Data types
**Primitive data types** can only have one value: boolean, string, number

**Complex data types** can have more than one: arrays and objects

## Arrays
**arrays** = lists of things  
use square brackets to create an array

	let prices = [1.17, 91.01, 14.51];
	console,log(prices[0]); // equals 1.17

prices[0] is an 'index'

## Loops
for ( [start]; [run-as-long-as]; [each-time] )

	for(let i=0; i<5; i=i+1) {
		console.log(prices[i]);
	}