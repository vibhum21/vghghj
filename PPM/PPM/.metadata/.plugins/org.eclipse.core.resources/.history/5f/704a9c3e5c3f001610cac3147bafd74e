angular.module("projApp").controller("ProjectCtrl",["$scope","$uibModal","ProjectService",function($scope,$uibModal,projService){
	$scope.proj = {};
	$scope.search = {
			searchFor:"",	
			searchBy:"id"
		};
	//http calls
	$scope.refresh = function(){
		projService.list()
		.then(function(response){
			$scope.projs = response.data;
		});
	}
	$scope.add = function(){
		console.log("add called");
		projService.addProject($scope.proj).then(
				function(response){
					var data = response.data;
					var msg = data.name+" added successfully with id as "+data.id;
					$scope.addAlert("success",msg);
					$scope.dismissConfirm();
					$scope.proj={};
				},
				function(error){
					$scope.addAlert("danger","Some error occured on server side");
					$scope.dismissConfirm();
				}
		)
	}
	$scope.remove = function(proj){
		proj = JSON.parse(angular.toJson(proj));
		projService.removeProject(proj)
		.then(function(response){
			alert(response.data+" removed successfully");
			$scope.refresh();
		})
	};

	$scope.$watch('search.searchBy',function(){
		console.log("here");
		$scope.search.searchFor="";
		$scope.search.searchFor.id="";
		$scope.search.searchFor.name="";
		$scope.search.searchFor.type="";
		$scope.search.searchFor.startdate="";
		
	});
	//sorting logic
	$scope.sortColumn="id";
	$scope.desc = false;
	
	$scope.sort = function(column){
		if($scope.sortColumn == column){
			$scope.desc = !$scope.desc;
		}
		else{
			$scope.sortColumn = column;
			$scope.desc = false;
		}
	};
	$scope.sortClass = function(column){
		if($scope.sortColumn == column){
			return $scope.desc == true ? 'arrow-down' : 'arrow-up'; 
		}
		return 'gap';
	};
	$scope.update = function(proj){
		proj = JSON.parse(angular.toJson(proj));
		projService.updateProject(proj)
		.then(function(response){
			alert(response.data+" updated successfully");
			$scope.refresh();
		});
	};
}]);