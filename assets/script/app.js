 'use strict';
  
var app = angular.module("searchApp", ['ngRoute', 'ngTable'])
.config(
	['$routeProvider', 
	function ($routeProvider)
	{		
		$routeProvider
		.when('/Search', {
			templateUrl: 'view/Search.html',
			controller: 'SearchController'
		})
		.otherwise({
			redirectTo: '/Search'
		});
	}]
);
