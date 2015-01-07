'use strict';

/**
 * @ngdoc overview
 * @name htmsMobileApp
 * @description
 * # htmsMobileApp
 *
 * Main module of the application.
 */
angular
  .module('htmsMobileApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/entBaseInfo', {
        templateUrl: 'views/entBaseInfo/entBaseInfo-list.html',
        controller: 'EntBaseInfoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
