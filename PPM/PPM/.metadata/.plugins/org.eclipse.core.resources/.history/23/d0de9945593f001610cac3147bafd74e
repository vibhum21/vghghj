angular.module('projApp').provider('EventService',function(){
	var baseUrl = "http://localhost:8080/spring-rest-ppm/";
	var relativeUrl = "rest/projectEventController/"
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
					var url="getAllProjectEvent";
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
				addProjectEvent : function(event){
					var url="addProjectEvent";
					var deferred = $q.defer();
					$log.debug("sending [post] at "+baseUrl+relativeUrl+url);
					
					$http.post(baseUrl+relativeUrl+url,event)
					.then(function(data){
						deferred.resolve(data);
					},function(error){
						alert(error);
					});
					return deferred.promise;
					
				}
			}
		}
	};
});