/**
 * 	
 */

angular.module("projApp",['ngRoute','ui.bootstrap']);

angular.module("projApp").config(['$routeProvider','$logProvider',function($routeProvider,$logProvider){
	
	$logProvider.debugEnabled(true);
	
	$routeProvider
	.when('/',{
		templateUrl : 'app/proj-manager/partials/index.html',
		controller : 'ProjectCtrl'
	})
	.when('/newproject',{
		templateUrl : 'app/proj-manager/partials/add.html',
		controller : 'ProjectCtrl'
	})
	.when('/update',{
		templateUrl : 'app/proj-manager/partials/update.html',
		controller : 'ProjectCtrl'
	})
	.when('/view',{
		templateUrl : 'app/proj-manager/partials/search.html',
		controller : 'ProjectCtrl'
	})
	.when('/remove',{
		templateUrl : 'app/proj-manager/partials/remove.html',
		controller : 'ProjectCtrl'
	})
	.when('/portfolio',{
		templateUrl : 'app/proj-manager/partials/portfolio.html',
		controller:'PortFolioController'
	})
	.when('/addproj',{
		templateUrl : 'app/proj-manager/partials/addToPort.html',
		controller:'PortFolioController'
	})
	.when('/removeproj',{
		templateUrl : 'app/proj-manager/partials/removeFromPort.html',
		controller:'PortFolioController'
	})
	.when('/event',{
		templateUrl : 'app/proj-manager/partials/addEvent.html',
		controller:'EventController'
	})
	.when('/response',{
		templateUrl : 'app/proj-manager/partials/response.html',
		controller:'EventController'
	})
	.otherwise({
		redirectTo : '/'
	});
	
}]);