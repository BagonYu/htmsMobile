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
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
    /**
     * 主页
     */
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    /**
     * 企业基本信息
     */
      .when('/entBaseInfo', {
        templateUrl: 'views/entBaseInfo/entBaseInfo-list.html',
        controller: 'EntBaseInfoCtrl'
      })
      .when('/newBaseInfo',{
        templateUrl:'views/entBaseInfo/newBaseInfo1.html',
        controller:'NewBaseInfoCtrl'
      })
      .when('/infoDetail/:id',{
        templateUrl:'views/entBaseInfo/infoDetail.html',
        controller:'InfoDetailCtrl'
      })
    /**
     * 隐患
     */
    /**
     * 其他
     */
      .when('/qiyeMain', {
        templateUrl: 'views/qiyemain.html',
        controller: 'QiyemainCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  })

  .run(function (Authentication, Application, $rootScope, $location, RouteFilter) {

    //Authentication.requestUser().then(function() {
    //
    //  Application.makeReady();
    //});


    //路由监听，判断是否存在权限
    $rootScope.$on('$locationChangeStart', function(scope, next, current) {

      if($location.path() === '/login') return;

      if(! Application.isReady())
      {
        $location.path('login');
      }

      //触发判断
      RouteFilter.run($location.path());
    })
  });
