module.exports = Backbone.View.extend({
    
	initialize: function() {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);
    },
	
	/*
	 * Don't need event listeners or handlers here because the list view
	 * is only rendered when the collection triggers a change
	 */
	
    render: function () {
        const parent = this.el.querySelector('ul');
		const template = document.querySelector('#event-list-template').innerHTML;
		
		// Clear the existing event list before re-rendering
        // Only need to select <ul> bc the only <ul> in the event list view
        this.el.querySelector('ul').innerHTML = '';
		
        for (let i = 0; i < this.model.models.length; i++) {
        	const event = this.model.models[i];
			
            const li = document.createElement('li');
			li.innerHTML = Mustache.render(
				template,
                {
                    id: event.get('id'),
                    name: event.get('name'),
                    attendees: event.get('attendees'),
                    date: event.get('date'),
                }
            );
			
            // Add event listener to 'remove' button on each event item
			// Can't do this until after the list item is rendered
            const removeBtn = li.querySelector('.remove');
            removeBtn.addEventListener('click', () => {
				 /*
				 * Built-in to Backbone
				 * Every collection has a remove() property
				 */
				console.log('removed ' + event.get('name'));
                this.model.remove(event);
            });
			
            parent.appendChild(li);
        }
    },
});