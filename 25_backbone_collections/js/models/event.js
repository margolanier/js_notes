module.exports = Backbone.Model.extend({
	defaults: {
		name: 'Unknown Event',
		date: '2017-10-11',
		attendees: 10,
	},
	
	changeName(name) {
		this.set('name', name);
	},
});