'use strict';

/**
 * @ngdoc function
 * @name tpbonusApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the tpbonusApp
 */
angular.module('tpbonusApp')
  .controller('TodoCtrl', function($scope, $http) {
    		
    		if(window.localStorage['datachange'])
    		{
    			$scope.todosResult=angular.fromJson(window.localStorage['datachange']);
    		}
    		else{
  			$http.get("http://jsonplaceholder.typicode.com/todos")
		    .then(function(response) {
		        $scope.todosResult = response.data;
		    });
		    }
		    
		    $http.get("http://jsonplaceholder.typicode.com/users")
		    .then(function(response) {
		        $scope.userResult = response.data;
		    });    
		    

		    $scope.Nomfilter = function(user){
			    return user.name.split(' ')[1] ;
			}

			$scope.save=function(cle,val){
				window.localStorage['datachange'] = JSON.stringify($scope.todosResult);
			}

  });
