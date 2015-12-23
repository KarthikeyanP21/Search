'use strict';
  
angular.module('searchApp').controller('SearchController',["$scope", "$filter", "ngTableParams", "searchService",
	function ($scope, $filter, ngTableParams, searchService) 
	{		
		searchService.searchApi(function(response) 
		{		
			$scope.books = response.data.items;			
			$scope.booksTable = new ngTableParams({
			page: 1,
			count: 9
			}, {
				total: $scope.books.length, 
				getData: function ($defer, params) {
					$scope.data = params.sorting() ? $filter('orderBy')($scope.books, params.orderBy()) : $scope.books;
					$scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
					$scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
					$defer.resolve($scope.data);
				}
			});			
		});	
	}
]);
