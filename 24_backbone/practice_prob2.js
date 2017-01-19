/*
 * HELP DESK
 * Professionals 'register' with the help desk to say 1) their business and 2) their service
 * Customers 'ask' the help desk for 1) the business to provide 2) a service
 *
 * Imitates event listeners in the DOM
 * window.addEventListener('load', ...
 * desk.registerAs('business', ...
 */
function HelpDesk() {
	this.businesses = {};
	
	this.ask = function(business, request) {
		// this.businesses[business] is a function
		// this.businesses[business](request) is passing in the 'problem' as a parameter
		this.businesses[business](request);
	};
	
	// when customer asks for a business, run that 'service' function
	this.registerAs = function(business, service) {
		// this.businesses[business] is a function
		this.businesses[business] = service;
	};
	
	return this;
}

window.addEventListener('load', () => {
	let desk = new HelpDesk();
	
	desk.registerAs('teacher', function(problem) {
		console.log(`I am a teacher.  I can help you ${problem}.`);
	});
	
	desk.registerAs('plumber', function(problem) {
		console.log(`I am a plumber.  I can help you ${problem}.`);
	});
	
	desk.ask('teacher', 'learn calculus');
	desk.ask('plumber', 'fix a leak');
});