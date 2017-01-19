/* 1) Create a model */
let IngredientsModel = Backbone.Model.extend({
	/* Built-in to Backbone, these are the strating values for each property */
	defaults: {
		peas: 100,
	},
	
	increasePeas() {
		/*
		 * Functions built into Backbone: this.get, this.set
		 * this.get('peas'); => gets the value of 'peas'
		 * this.set('peas', 5); => sets the number of 'peas' to 5
		 */
		
		// increase the number of peas by 1
		// this.peas = this.peas + 1;
		this.set('peas', this.get('peas') + 1); 
	}
});

/* 2) Decide how to display & interact with the model */
let IngredientView = Backbone.View.extend({
	
	initialize() { // what happens on init
		this.model.on('change', this.render, this); // third parameter 'this' is for bind()
	},
	
	events: { // event listeners
		// '<event name> <element selector>' : '<function name>'
		'click #more-peas' : 'addPea',
	},
	
	addPea() { // event handler
		console.log('peas, love em');
		/*
		 * 1) Let the MODEL handle the 'increasePeas' function
		 *    bc it controls the data (avoid VIEWS modifying data)
		 * 2) Each view has a parallel model
		 * 3) Use 'this.model' to send the VIEW event handler to
		 *    it's MODEL pair
		 */
		this.model.increasePeas();
	},
	
	render() {
		let button = this.el.querySelector('#more-peas');
		button.textContent = this.model.get('peas');
	},
});

window.addEventListener('load', () => {
	let ingredients = new IngredientsModel();
	
	let mainView = new IngredientView({
		// every view is tied to a specific model
		// set up model (data) - view (event) pair here
		el: document.querySelector('#ingredients'),
		model: ingredients,
	});
});