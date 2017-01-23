module.exports = Backbone.View.extend({
	
	initialize() {
		this.model.on('change', this.render, this);
		this.model.on('add', this.render, this);
		this.model.on('remove', this.render, this);
	},
	
	events: {
		//'click #go': 'updateEvent',
		'click #go': 'createEvent',
	},
	
	/*
	updateEvent() {
		const newName = this.el.querySelector('#name').value;
		this.model.changeName(newName);
	},
	*/
	
	createEvent() {
		const newName = this.el.querySelector('#name').value;
		this.model.addEvent(newName);
	},
	
	render() {
		/*
		const event = this.el.querySelector('#list-events h2');
		event.textContent = this.model.get('name');
		*/
		
		const parent = this.el.querySelector('#list-events');
		parent.innerHTML = '';
		/*
		 * the view's 'model' is actually a 'collection'
		 * (which is defined in app.js)
		 * every collection has a 'model' property
		 * individual models in the view are accessible via
		 * 'this.model.models'
		 */
		
		
		/* // rendering without mustache
		for (let i=0; i<this.model.models.length; i++) {
			const event = this.model.models[i];
			const li = document.createElement('li');
			li.textContent = event.get('name');
			
			parent.appendChild(li);
		}*/
		
		// Rendering with Mustache
		const template = document.querySelector('#event-template');
		
		for (let i=0; i<this.model.models.length; i++) {
			const event = this.model.models[i];
			const li = document.createElement('li');
			
			li.innerHTML = Mustache.render(
				template.innerHTML,
				{
					name: event.get('name'),
					attendees: event.get('attendees'),
					date: event.get('date'),
				}
			);
			
			// Add event listener to 'remove event' button
			// after button is created with Mustache
			const remove = li.querySelector('.remove');
			remove.addEventListener('click', () => {
				console.log('removed ' + event.get('name'));
				this.model.remove(event);
				// ^ if you don't use an arrow function here,
				// you need to use self.model instead of this.model
			});
			
			parent.appendChild(li);
		}
	},
	
});