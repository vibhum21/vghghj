angular.module('projApp').provider('ProjectService',function(){
	var baseUrl = "http://localhost:6060/finalproject/";
	var relativeUrl = "proj"
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
					var deferred = $q.defer();
					$log.debug("sending [get] at "+baseUrl+relativeUrl);
					$http.get(baseUrl+relativeUrl)
					.then(function(data){
						deferred.resolve(data);
					},function(error){
						alert(error);
					});
					return deferred.promise;
					
				},
				addProject : function(proj){
					var deferred = $q.defer();
					$log.debug("sending [put] at "+baseUrl+relativeUrl);
					$http.put(baseUrl+relativeUrl,proj)
					.then(function(data){
						deferred.resolve(data);
					},function(error){
						alert(error);
					});
					return deferred.promise;
					
				},
				removeProject : function(proj){
					var deferred = $q.defer();
					$log.debug("sending [delete] at "+baseUrl+relativeUrl+"/"+proj.id+" with data :"+proj);
					$http({
						url:baseUrl+relativeUrl+"/"+proj.id,
						method:'DELETE',
					})
					.then(function(data){
						deferred.resolve(data);
					},function(error){
						alert(error);
					});
					return deferred.promise;
				},
				updateProject : function(proj){
					var deferred = $q.defer();
					$log.debug("sending [post] at "+baseUrl+relativeUrl+"/"+proj.id+" with data :"+proj);
					$http({
						url:baseUrl+relativeUrl+"/"+proj.id,
						method:'POST',
					})
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
