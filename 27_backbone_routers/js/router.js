module.exports = Backbone.Router.extend({
	
	// Need to access views in the router, so pass them in here
	initialize: function(views) {
		/*
		 * new AppRouter({ add: addView }) <= from app.js
		 * addView => becomes this.views.add
		 * 'this' refers to the router
		 */
		this.views = views;
	},
	
	// Define your routes
	routes: {
		/*
		 * when user goes to url.com/#create, run showCreate() ftn
		 * 'create' has to match /#slug in link
		 * home pg could have customized view or share another ftn ('showForm')
		*/
        '': 'showForm', // 'hideAll'
        'create': 'showForm',
        'list': 'showList',
        'details/:eventId': 'showDetail', // :eventId is variable for id in the link
    },
	
	
	
    hideAll: function () {
        this.views.add.el.classList.add('hidden');
        this.views.list.el.classList.add('hidden');
		this.views.detail.el.classList.add('hidden');
    },
    
	/*
	 * route 'create' => showForm() { toggle visibility of view }
     */
    showForm: function () {
        this.views.add.el.classList.remove('hidden');
        this.views.list.el.classList.add('hidden');
		this.views.detail.el.classList.add('hidden');
    },
	
    showList: function () {
        this.views.add.el.classList.add('hidden');
        this.views.list.el.classList.remove('hidden');
		this.views.detail.el.classList.add('hidden');
    },
	
	// eventId from the route (link) is passed in as id parameter
    showDetail: function (id) {
		
		// Hide the other views
		this.views.add.el.classList.add('hidden');
        this.views.list.el.classList.add('hidden');
		this.views.detail.el.classList.remove('hidden');
		
        
        // 'id' tells detail view the specifc event to render
        this.views.detail.render(id);
    },
	
});