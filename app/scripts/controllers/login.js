'use strict';

/**
 * @ngdoc function
 * @name htmsMobileApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the htmsMobileApp
 */
angular.module('htmsMobileApp')
  .controller('LoginCtrl', function ($scope,$location,Authentication,Application) {

    Application.registerListener(function()
    {
      //如果是企业用户则跳转到企业的主页
      if (Authentication.getUser().type == 0)
      $location.path('/');
      else
      $location.path('/qiye')

    });
    $scope.login = function(username,password){
      Authentication.login({username:username,password:password}).then(function (user) {
        console.log(user)

      },function(fail){
        console.log(fail)
      })
    }
  });
