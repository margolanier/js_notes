// Add router to the dependencies list
// Load ui router before loading the app
const app = angular.module('FriendApp', ['ui.router']);

// Config section to set up app and routes (states)
// $stateProvider is a service (like $scope) to hold routes (states)
app.config(function($stateProvider) {
	$stateProvider.state({
		name: 'list-em-all',
		url: '/list', // if you don't use the name, the url is localhost:3000/#!/list
		component: 'friendList',
	});
	
	$stateProvider.state({
		name: 'show-details',
		url: '/details/:person_id',
		component: 'friendDetails',
	});
	
	// Set the default state
	$stateProvider.state({
		name: 'home',
		url: '',
		component: 'friendList',
	})
});

app.controller('ListController', function($scope, FriendsService) {
	$scope.friends = FriendsService.getFriends();
});

// $stateParams = parameters provided by ui-router
// Use to access the parameters for that state (url: '/details/:person_id')
app.controller('DetailsController', function($stateParams) {
	// Need to parseInt, these params are strings by default
	const id = $stateParams.person_id;
	$scope.person = FriendsService.getPerson(id);
});

// Defining a component
app.component('friendList', {
	controller: 'ListController',
	templateUrl: 'templates/list.html',
});

app.component('friendDetails', {
	controller: 'DetailsController',
	templateUrl: 'templates/details.html',
});

app.factory('FriendsService', function() {
	const friends = [
		{ id: 0, name: 'Francisco', picture: '' },
		{ id: 1, name: 'Gloria', picture: '' },
		{ id: 2, name: 'John', picture: '' },
	];
	
	return {
		getFriends() {
			return friends;
		},
		getPerson(id) {
			return friends[parseInt(id)];
		}
	};
});