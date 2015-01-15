angular.module('htmsMobileApp')

  .run(function (RouteFilter, Authentication) {

    //访客
    RouteFilter.register('guest', ['/login'], function () {
      return !Authentication.exists();
    }, '/login');

    //部门用户
    RouteFilter.register('BUMEN', ['/entBaseInfo', '/newBaseInfo', new RegExp('/infoDetail/*'), '/main', '/logout','/message',new RegExp('/messageDetail/*')], function () {
      return Authentication.typeEqBumen();
    }, '/main');

    //企业用户
    RouteFilter.register('QIYE', ['/qiyeyinhuanByid','/entBaseInfo', '/newBaseInfo', new RegExp('/infoDetail/*'), '/qiyeMain', '/logout'], function () {
      return Authentication.typeEqQiye();
    }, '/qiyeMain');
  });
