var masterApp = angular.module('masterApp', ['ngRoute']);

masterApp.config(['$routeProvider', function($routeProvider)
{
	$routeProvider
		.when('/home', {
			templateUrl: 'view/home.html'
		})
		.when('/listItem',{
			templateUrl: 'view/list-item.html'
		})
		.when('/addItem',{
			templateUrl: 'view/add-item.html'
		})
		.otherwise({
			redirectTo: '/home'
		});

}]);