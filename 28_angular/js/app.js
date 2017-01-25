
// Define the app by creating a new Angular 'module'.
const app = angular.module('HairApp', []);
/*
 * This allows you to access multiple files.
 * Second argument (array) is a dependency list
 * (the other modules Angular should load before running HairApp)
 */


// Define the controller ('NameOfController, function() { what controller does })
app.controller('OwnerController', function ($scope) {
	/*
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
});

/**
 * Scopes are INDEPENDENT across controllers. The scope in
 * one controller is not the same as the scope in another
 * controller.
 */
// Without services
// app.controller('ListOPetsController', function ($scope) {
//     $scope.petName = '';
//     $scope.pets = [];

//     // You won't have access to 'nums' in your template
//     // because its a local variable. You need to add it
//     // to scope, so when we do $scope.x that means our
//     // templates can access this array called 'x'.
//     let nums = [1, 2, 67];
//     $scope.x = nums;

//     $scope.addPet = function () {
//         $scope.pets.push($scope.petName);
//         $scope.petName = '';
//     };

//     $scope.remove = function (id) {
//         $scope.pets.splice(id, 1);
//     };
// });

// Second param is name of service that was created below.
/*app.controller('ListOPetsController', function ($scope, HairService) {
    $scope.petName = '';
    $scope.pets = HairService.getPets();
    // $scope.pets = [];

    $scope.newPet = function () {
        HairService.addPet($scope.petName);
        // $scope.pets.push($scope.petName);
        $scope.petName = '';
    };

    $scope.remove = function (id) {
        $scope.pets.splice(id, 1);
    };
});*/

/**
 * .factory is how we create services. Sorry but it
 * is, nothing we can do about it.
 * 
 * This function runs once at the beginning and returns
 * the OBJECT THAT IS THE SERVICE.
 */
app.factory('HairService', function() {
    let pets = [];

    return {
        // Made up function names
        addPet: function (name) {
            pets.push(name);
        },
        getPets: function () {
            return pets;
        },
    };
});