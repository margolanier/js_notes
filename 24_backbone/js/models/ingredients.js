module.exports = Backbone.Model.extend({
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
		// max 115 (validation happens in model)
		// this.peas = this.peas + 1;
		if (this.get('peas') < 115) {
			this.set('peas', this.get('peas') + 1); 
		}
	}
});