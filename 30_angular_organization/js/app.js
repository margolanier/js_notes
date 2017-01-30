const app = angular.module('SnaxApp', []);

/*
const SnackListController = require('./controllers/snack-list');
const ReceiptListController = require('./controllers/receipt-list');

app.controller(SnackListController.name, SnackListController.func);
app.controller(ReceiptListController.name, ReceiptListController.func);
*/

const controllers = [
	require('./controllers/snack-list'),
	require('./controllers/receipt-list'),
];

for (let i=0; i<controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].func);
}

/*app.factory('', function() {
});*/