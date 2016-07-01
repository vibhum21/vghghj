angular.module('projApp').provider('ProjectService',function(){
	var baseUrl = "http://localhost:8080/spring-rest-ppm/";
	var relativeUrl = "rest/projectController/"
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
					var url="getAllProject";
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
				addProject : function(proj){
					var url="addProject";
					var deferred = $q.defer();
					$log.debug("sending [post] at "+baseUrl+relativeUrl+url);
					$http.post(baseUrl+relativeUrl+url,proj)
					.then(function(data){
						deferred.resolve(data);
					},function(error){
						alert(error);
					});
					return deferred.promise;
					
				},
				removeProject : function(proj){
					var url="deleteProject";
					var deferred = $q.defer();
					$log.debug("sending [delete] at "+baseUrl+relativeUrl+url+"/"+proj.projectid+" with data :"+proj);
					$http({
						url:baseUrl+relativeUrl+url+"/"+proj.projectid,
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
					var url="updateProject";
					var deferred = $q.defer();
					$log.debug("sending [put] at "+baseUrl+relativeUrl+url+"/"+proj.projectid+" with data :"+proj);
					$http({
						url:baseUrl+relativeUrl+url+"/"+proj.projectid,
						method:'PUT',
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
