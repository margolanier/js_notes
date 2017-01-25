module.exports = Backbone.View.extend({
    
	// For event detail view, render() needs id of specific model
	render: function(id) {
		
		// getEvent is custom ftn to call on collection in models/event-list.js
		const event = this.model.getEvent(id); // 'this.model' is the view's collection
		
        const template = document.querySelector('#event-detail-template').innerHTML;
		
        this.el.innerHTML = Mustache.render(
            template,
            {
                name: event.get('name'),
				date: event.get('date'),
                attendees: event.get('attendees'),
            }
        )
    }
});