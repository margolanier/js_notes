
// Define the app by creating a new Angular 'module'.
const app = angular.module('HairApp', []);
/*
 * This allows you to access multiple files.
 * Second argument (array) is a dependency list
 * (the other modules Angular should load before running HairApp)
 */


// Define the controller ('NameOfController, function(params) { what controller does })
app.controller('OwnerController', function ($scope) {
	/*
	 * Scopes are independent across controllers
	 * ($scope of OwnerController NOT equal to $scope of ClientController)
	 *
	 * Can add any number of params to function
	 * Parameters are 'services' (can use built-in services or customizable)
	 * - $scope is DOM things
	 * - $url is for routes
	 * - $http is for server requests
	 */
    $scope.owner = 'Salt Bae';
    $scope.hairType = 'brown';
	
	$scope.baesHair = function(hair) {
        $scope.hairType = `very ${hair}`;
    };
});

app.controller('ClientController', function ($scope, HairService) {
	/*
	 * Last parameter (if controller needs access to service) is the service name
	 * Param names are specific to Angular service names or custom service names
	 * 'HairService' refers to the service created below
	 */
	$scope.clientName = '';
	
	// Note: 'things' is a local variable
	// (not accesssible to template unless you add it as property of $scope)
	let things = ['thingA', 'thingB', 'thingC'];
	$scope.items = things;
	
	// Add client requests to array of tasks
	// Need tasks[] to be accessible in HTML to loop over list & render
	
	// METHOD 1
	$scope.tasks = ['hair cut'];
	$scope.addRequest = function(newTask) {
		$scope.tasks.push(newTask);
		$scope.clientRequest = ''; // clear textbox content
	};
	
	// METHOD 2
	$scope.addRequest2 = function() {
		$scope.tasks.push($scope.clientRequest);
		$scope.clientRequest = ''; // clear textbox content
		console.log($scope.tasks);
	};
	
	$scope.remove = function(id) {
		$scope.tasks.splice(id, 1);
	};
});


// Create services (for data)
// Function runs once and always returns an **object that is the service**
app.factory('HairService', function() {
    let tasks = [];
	
    return {
        addRequest: function(task) {
            tasks.push(task);
        },
        getRequests: function() {
            return tasks;
        },
    };
});