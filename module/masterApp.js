var masterApp = angular.module('masterApp', ['ngRoute']);

// Route Configure

masterApp.config(['$routeProvider', function($routeProvider)
{
	$routeProvider
		.when('/home', {
			templateUrl: 'view/home.html'
		})
		.when('/listItem',{
			templateUrl: 'view/listItem.html',
			controller: 'ItemListController'
		})
		.when('/addItem',{
			templateUrl: 'view/addItem.html',
			controller: 'ItemAddController'
		})
		.otherwise({
			redirectTo: '/home'
		});

}]);

// Controller Configure

masterApp.controller('ItemListController', function($scope)
{
	
	$scope.message = "List Items";

});


masterApp.controller('ItemAddController', function($scope)
{
	
	$scope.message = "Add Items";

});

