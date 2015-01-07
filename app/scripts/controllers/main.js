'use strict';

/**
 * @ngdoc function
 * @name htmsMobileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the htmsMobileApp
 */
angular.module('htmsMobileApp')
  .controller('MainCtrl', function ($scope) {
    $scope.mainNo = {
      entBaseInfoNo : {
        total:508,
        newQy:5
      },
      yinhuanNo : {
        total : 1080,
        newYh : 18
      },
      pingjiNo : {
        total : 760,
        newPj : 7
      },
      messageNo : {
        total : 67,
        newMsg : 3
      }
    }
  });
