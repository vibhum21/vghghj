angular.module("projApp").controller("EventController",["$scope","$uibModal","EventService",function($scope,$uibModal,eventService){
	$scope.event = {};
	$scope.add = function(){
		console.log("add called");
		eventService.addProjectEvent($scope.event).then(
				function(response){
					var data = response.data;
					var msg = data.name+" added successfully with id as "+data.id;
					$scope.addAlert("success",msg);
					$scope.dismissConfirm();
					$scope.event={};
				},
				function(error){
					$scope.addAlert("danger","Some error occured on server side");
					$scope.dismissConfirm();
				}
		)
	}
}]);