module.exports = {
	name: 'SnackListController',
	func: function($scope) {
		$scope.snacks = [
			{name: 'Cap\'n Crunch Berries', count: 8, price: 4.59},
			{name: 'Golden Grahams', count: 4, price: 3.19},
			{name: 'Froot Loops', count: 0, price: 2.60},
		];
		
		$scope.buy = function(what) {
			if(what.count > 0) {
				what.count--;
			}
		};
	},
};