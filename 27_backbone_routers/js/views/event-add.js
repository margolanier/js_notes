module.exports = Backbone.View.extend({
	
	// don't need initialize() here because this view only handles the form
	
	events: {
		'click #go': 'createEvent',
	},
	
	createEvent() {
		const newEvent = this.el.querySelector('#name').value;
		this.model.addEvent(newEvent);
	},
	
	// don't need render() here because the form is hardcoded in index.html
	
});