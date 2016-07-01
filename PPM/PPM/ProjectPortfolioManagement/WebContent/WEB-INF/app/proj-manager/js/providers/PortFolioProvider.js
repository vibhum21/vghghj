angular.module('projApp').provider('PortfolioService',function(){
	var baseUrl = "http://localhost:8080/spring-rest-ppm/";
	var relativeUrl = "rest/portfolioController/"
	return {
		setBaseUrl:function(value){
			baseUrl = value;
		},
		setRelativeUrl:function(value){
			relativeUrl = value;
		},
		$get:function($http,$q,$log){
			return{
				list : function(){
					var url="getAllPortfolio";
					var deferred = $q.defer();
					$log.debug("sending [get] at "+baseUrl+relativeUrl+url);
					$http.get(baseUrl+relativeUrl+url)
					.then(function(data){
						deferred.resolve(data);
					},function(error){
						alert(error);
					});
					return deferred.promise;
					
				},
				addProjectToPort : function(port){
					var url="addPortfolio";
					var deferred = $q.defer();
					$log.debug("sending [post] at "+baseUrl+relativeUrl+url);
					
					$http.post(baseUrl+relativeUrl+url,port)
					.then(function(data){
						deferred.resolve(data);
					},function(error){
						alert(error);
					});
					return deferred.promise;
					
				},
				removeProjectFromPort : function(port){
					var url="deletePortfolio"
					var deferred = $q.defer();
					debugger;
					$log.debug("sending [delete] at "+baseUrl+relativeUrl+url+"/"+port.projectid+" with data :"+port);
					$http({
						url:baseUrl+relativeUrl+url+"/"+port.projectid,
						method:'DELETE',
					})
					.then(function(data){
						debugger;
						deferred.resolve(data);
					},function(error){
						debugger;
						alert(error);
					});
					return deferred.promise;
				}
			}
		}
	};
});
