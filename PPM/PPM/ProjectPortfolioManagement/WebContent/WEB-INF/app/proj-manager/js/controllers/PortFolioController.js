angular.module("projApp").controller("PortFolioController",["$scope","$uibModal","PortfolioService",function($scope,$uibModal,folioService){
	$scope.port = {};
	$scope.ports = [];
	$scope.add = function(){
		console.log("add called");
		folioService.addProjectToPort($scope.port).then(
				function(response){
					var data = response.data;
					var msg = data.name+" added successfully with id as "+data.projectid;
					$scope.addAlert("success",msg);
					$scope.dismissConfirm();
					$scope.port={};
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
	      templateUrl: 'newPortConfirmationModal.html',
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
		folioService.list()
		.then(function(response){
			debugger;
			$scope.ports = response.data;
			debugger;
		});
	}
	$scope.remove = function(port){
		debugger;
		port = JSON.parse(angular.toJson(port));
		folioService.removeProjectFromPort(port)
		.then(function(response){
			alert(response.data+" removed successfully");
			$scope.refresh();
		});
	}
}]);