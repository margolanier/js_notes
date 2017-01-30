module.exports = {
	name: 'SnackListController',
	func: function($scope) {
		$scope.snacks = [
			{name: 'Capn Crunch Berries', count: 8, price: 4.59},
			{name: 'Golden Grahams', count: 4, price: 3.19},
		];
		
		$scope.buy = function(what) {
			if(what.count > 0) {
				what.count--;
			}
		};
	},
};