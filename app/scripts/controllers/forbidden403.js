'use strict';

/**
 * @ngdoc function
 * @name htmsMobileApp.controller:Forbidden403Ctrl
 * @description
 * # Forbidden403Ctrl
 * Controller of the htmsMobileApp
 */
angular.module('htmsMobileApp')
  .controller('Forbidden403Ctrl', function ($scope,$window) {
    $scope.back = function(){
      $window.history.back();
    }
  });
