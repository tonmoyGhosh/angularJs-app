var masterApp = angular.module('masterApp', ['ngRoute']);

// Route Config
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

// Active & In Active Task List Controller Config
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

// Add Task Controller Config
masterApp.controller('TaskAddController', function($scope)
{
	$scope.tasks = [];

	// Add Task
	$scope.addTask = function()
	{	
		$scope.tasks.push({

			name: $scope.task.name,
			duration: $scope.task.duration

		});

		$scope.task.name = "";
		$scope.task.duration = "";

	};

	// Remove Task
	$scope.removeTask = function(task)
	{	
		var removeTask = $scope.tasks.indexOf(task);
		$scope.tasks.splice(removeTask, 1);

	};

	// Order By Duration
	$scope.orderDuration = 'duration';
	$scope.orderByDuration = function(orderDurationVal)
	{
		if(orderDurationVal == 'duration') return $scope.orderDuration = '-duration';
		else return $scope.orderDuration = 'duration';
		
	};

});