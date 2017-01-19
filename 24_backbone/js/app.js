// Create the models and views
const IngredientsModel = require('./models/ingredients');
const IngredientView = require('./views/ingredients');

window.addEventListener('load', () => {
	let ingredients = new IngredientsModel();
	
	let mainView = new IngredientView({
		// every view is tied to a specific model
		// set up model (data) - view (event) pair here
		el: document.querySelector('#ingredients'),
		model: ingredients,
	});
});