var masterApp = angular.module('masterApp', ['ngRoute']);

// Route Configure

masterApp.config(['$routeProvider', function($routeProvider)
{
	$routeProvider
		.when('/home', {
			templateUrl: 'view/home.html'
		})
		.when('/activeTask',{
			templateUrl: 'view/activeTask.html',
			controller: 'TaskListController'
		})
		.when('/inactiveTask',{
			templateUrl: 'view/inactiveTask.html',
			controller: 'TaskListController'
		})
		.when('/addTask',{
			templateUrl: 'view/addTask.html',
			controller: 'TaskAddController'
		})
		.otherwise({
			redirectTo: '/home'
		});

}]);

// Active & In Active Task List Controller Configure

masterApp.controller('TaskListController', function($scope)
{
	$scope.tasks = [
		{
			name: 'Login & Register Module',
			duration: '1 Hour',
			available: true
		},
		{
			name: 'MIS Report 2.1',
			duration:'2 Hour',
			available: true

		},
		{
			name: 'AIS Report 2.1',
			duration:'2 Hour',
			available: true

		},
		{
			name: 'Due Register Report',
			duration:'4 Hour',
			available: false

		},
		{

			name: 'Purchase Branch Module',
			duration:'2 Hour',
			available: false

		}
	];

});

// Add Task Controller Configure

masterApp.controller('TaskAddController', function($scope)
{
		
	$scope.addTask = function()
	{	
		$scope.tasks.push({

			name: $scope.task.name,
			duration: $scope.task.duration

		});

		$scope.task.name = "";
		$scope.task.duration = "";
	};

});

