angular.module("projApp").controller("EventController",["$scope","$uibModal","EventService",function($scope,$uibModal,eventService){
	$scope.event = {};
	$scope.events = [];
	$scope.add = function(){
		console.log("add called");
		eventService.addProjectEvent($scope.event).then(
				function(response){
					var data = response.data;
					var msg = data.title+" added successfully with id as "+data.projecteventid;
					$scope.addAlert("success",msg);
					$scope.dismissConfirm();
					$scope.event={};
				},
				function(error){
					$scope.addAlert("danger","Some error occured on server side");
					$scope.dismissConfirm();
				}
		)
	};
	//confirmation Modal
	$scope.confirmModal = {};
	
	$scope.openConfirm = function () {
	     $scope.confirmModal = $uibModal.open({
	      animation: true,
	      templateUrl: 'newEventConfirmationModal.html',
	      scope : $scope
	    });
	};
	
	$scope.dismissConfirm = function(){
		$scope.confirmModal.dismiss();
	}
	
	//alert messages
	 $scope.alerts = [];

	 $scope.addAlert = function(intype,inmsg) {
		 $scope.alerts.push({type:intype,msg: inmsg});
	 };

	 $scope.closeAlert = function(index) {
	     $scope.alerts.splice(index, 1);
	 };
	//http calls
	$scope.refresh = function(){
		eventService.list()
		.then(function(response){
			debugger;
			$scope.events = response.data;
			debugger;
		});
	}
}]);