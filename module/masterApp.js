var masterApp = angular.module('masterApp', []);


masterApp.controller('ItemListController', function($scope)
{
	
	$scope.message = "List Items";

});


masterApp.controller('ItemAddController', function($scope)
{
	
	$scope.message = "Add Items";

});

