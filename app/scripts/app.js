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
      .when('/logout',{
        templateUrl: 'views/login.html',
        controller: 'LogoutCtrl'
      })
    /**
     * 主页
     */
      .when('/main', {
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
      .when('/qiyeyinhuanByid', {
        templateUrl: 'views/qiyeyinhuanbyid.html',
        controller: 'QiyeyinhuanbyidCtrl'
      })
      .when('/addYinhuan',{
        templateUrl: 'views/qiye/yinhuan/addYinhuan.html',
        controller: 'AddYinhuanCtrl'
      })
      .when('/addYinhuanQingkuang/:type',{
        templateUrl: 'views/qiye/yinhuan/addYinhuanQingkuang.html',
        controller: 'AddYinhuanCtrl'
      })
      .when('/addZhenggaiQingkuang',{
        templateUrl: 'views/qiye/yinhuan/addZhenggaiQingkuang.html',
        controller: 'AddYinhuanCtrl'
      })
      .when('/yinhuanDetail/:yinhuanId',{
        templateUrl: 'views/qiye/yinhuan/yinhuanDetail.html',
        controller: 'YinhuanDetailCtrl'
      })
    /**
     * 消息
     */
      .when('/message',{
        templateUrl:'views/message/message-list.html',
        controller:'MessageCtrl'
      })
      .when('/messageDetail/:id',{
        templateUrl:'views/message/messageDetail.html',
        controller:'MessageDetailCtrl'
      })
    /**
     * 其他
     */
      .when('/qiyeMain', {
        templateUrl: 'views/qiyemain.html',
        controller: 'QiyemainCtrl'
      })
      .when('/forbidden403', {
        templateUrl: 'views/forbidden403.html',
        controller: 'Forbidden403Ctrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  })
  .run(function (Authentication, Application, $rootScope, $location, RouteFilter) {
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
