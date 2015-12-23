'use strict';  
angular.module('searchApp')  
.factory('searchService',["$http", function ($http) 
{
	var service = {};
	service.searchApi = function (callback) 
	{	
		$http({
		  method: 'GET',
		  url: 'https://www.googleapis.com/books/v1/volumes?q=harry+potter'
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {		
		});
	}	
	return service;
}]);
