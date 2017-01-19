module.exports = Backbone.View.extend({
	
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