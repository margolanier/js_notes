const EventModel = require('./event');

module.exports = Backbone.Collection.extend({
	model: EventModel, // TYPE of model stored in this collection
	
	addEvent(name) {
		const event = new EventModel();
		event.set('name', name);
		
		this.add(event);
	},
});