'use strict';

/**
 * @ngdoc function
 * @name tpbonusApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the tpbonusApp
 */
angular.module('tpbonusApp')
  .controller('PostsCtrl', function($scope, $http) {
    $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        $scope.postsResult = response.data;
    });

    $http.get("http://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        $scope.userResult = response.data;
    });

});
