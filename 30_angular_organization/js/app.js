const app = angular.module('SnaxApp', []);

/*
const SnackListController = require('./controllers/snack-list');
const ReceiptListController = require('./controllers/receipt-list');

app.controller(SnackListController.name, SnackListController.func);
app.controller(ReceiptListController.name, ReceiptListController.func);
*/

/*
 * Use the same structure of 'name' and 'func' property in controller modules
 * so that you can loop through an array to define them all here
 */
const controllers = [
	require('./controllers/snack-list'),
	require('./controllers/receipt-list'),
	require('./components/snack-button'),
];

for (let i=0; i<controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].func);
}

/*
 * Defining components - names match the HTML element name
 * Components have two parts:
 * - Template (HTML)
 * - Controller (which controller renders the template)
 */
app.component('snackButton', { // camelCase in component converts to kabob-case in html)
	templateUrl: 'templates/snack-button.html',
	
	// Declare the inputs to this component
	bindings: {
		xyz: '<', // <= the type of binding
		tappedOn: '@',
	},
	/*
	 * Types of bindings
	 * 1. '<' means one-way binding (components CANNOT CHANGE the value) // read-only
	 * 2. '=' means two-way binding (components CAN CHANGE the value) // read-write
	 * 3. '@' means you are passing in a function
	*/
	
	//controller: 'SnackButtonController',
});