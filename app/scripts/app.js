'use strict';

/**
 * @ngdoc overview
 * @name tpbonusApp
 * @description
 * # tpbonusApp
 *
 * Main module of the application.
 */
angular
  .module('tpbonusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/TODO', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'TODO'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
