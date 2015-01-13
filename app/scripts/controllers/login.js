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
      if (Authentication.getUser().type == "QIYE")
      $location.path('/qiyeMain');
      else
      $location.path('/main');

    });
    $scope.login = function(username,password){
      angular.element('#loadAjax').removeAttr('style');
      Authentication.login({username:username,password:password}).then(function (user) {
        console.log(user)

      },function(fail){
        console.log(fail)
      })
    };
  })
  .controller('LogoutCtrl',function($scope,$location,Authentication,Application){
    Authentication.logout();
    Application.cancelReady();
    $location.path('/login');
  })
;
