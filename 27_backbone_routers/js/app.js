const EventList = require('./models/event-list');

const EventAddView = require('./views/event-add');
const EventListView = require('./views/event-list');
const EventDetailView = require('./views/event-details');

const AppRouter = require('./router');

window.addEventListener('load', () => {
	const list = new EventList();
	
	// Adding multiple views
	const addView = new EventAddView({
		el: document.querySelector('#event-add'),
		model: list, // all views using the same model
	});
	
	const listView = new EventListView({
		el: document.querySelector('#event-list'),
		model: list,
	});
	// listView is only view that needs to render on load
	listView.render();
	
	const detailView = new EventDetailView({
		el: document.querySelector('#event-detail'),
		model: list,
	});
	
	/*const pastView = new EventPastView({
		el: document.querySelector('#past-event-list'),
		model: list,
	});*/
	
	// Add some default events
	list.addEvent('Beer Festival');
    list.addEvent('Art Crawl');
    list.addEvent('Dodgeball Tournament');
	
	// Create router and pass in all the views created above
	const app = new AppRouter({
        add: addView,
        list: listView,
        detail: detailView,
    });
	
	Backbone.history.start();
	/*
	 * Tells browser to count changes in url fragments (url.com/#fragment)
	 * as different 'page visits'
	 * Historically, pressing the back button would ignore those views
	 */
});