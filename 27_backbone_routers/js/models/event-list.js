const EventModel = require('./event');

// Add an id to each event so that you can pass it in the router
// Event detail page will be url.com/#details/{id}
let nextId;

module.exports = Backbone.Collection.extend({
	model: EventModel,
	
	addEvent(name) {
		const event = new EventModel();
		event.set('id', nextId++); // this is a closure
		event.set('name', name);
		event.set('attendees', 0);
		
		this.add(event);
	},
	
	// This customized function is called from views/event-details.js
	// Loop through models to find the event with matching id
	getEvent: function(id) {
    	let matches = this.models.filter(function(model) {
			return model.get('id') === id;
		});
		return matches[0];
    },
	
});