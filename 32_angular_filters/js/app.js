/*
 * Filters: functions you run right before rendering to template 
 * Used for: formatting things to display, filtering arrays, quick calulations
 * Should be pure and quick, don't slow filters down with ajax calls, etc.
 */

const app = angular.module('SmoothieApp', []);

app.controller('IngredientController', function($scope, IngredientService, SmoothieService) {
	$scope.ingredients = IngredientService.allIngredients();
	
	$scope.add = function(item) {
		SmoothieService.addIngredient(item);
	};
	
	$scope.smoothie = SmoothieService.getSmoothie();
});

app.component('ingredientItem', {
	templateUrl: 'templates/ingredient-item.html',
	bindings: {
		item: '<', // one-way binding
		requestAdd: '&', // function binding
	},
});

/* Return the function that should run when this filter is used */
app.filter('asMoney', function() {
	// input (thing to filter) => output (result of filering)
	return function(num) {
		num = num.toFixed(2);
		return '$' + num;
	};
});

app.filter('priceLimit', function() {
	return function(items, max) {
		// only filter if max value is set, else return all
		if (max != undefined) {
			// filter all items down to items with a price below the max
			console.log(max);
			return items.filter(item => item.price < max);
		} else {
			return items;
		}
	};
});

app.factory('IngredientService', function() {
	const ingredients = [
		{ name: 'Strawberries', price: 1.89 },
		{ name: 'Bananas', price: .68 },
		{ name: 'Yogurt', price: 2.34 },
	];
	
	return {
		allIngredients() {
			return ingredients;
		}
	};
});

app.factory('SmoothieService', function() {
	const smoothie = [];
	
	return {
		addIngredient(item) {
			smoothie.push(item);
		},
		getSmoothie() {
			return smoothie;
		},
	};
});