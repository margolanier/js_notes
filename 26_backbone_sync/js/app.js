// const EventModel = require('./models/event');
const EventList = require('./models/event-list');
const EventView = require('./views/event');

window.addEventListener('load', () => {
	// const event = new EventModel();
	const list = new EventList();
	
	const view = new EventView({
		el: document.querySelector('body'),
		// model: event,
		model: list,
	});
	
	view.render();
});