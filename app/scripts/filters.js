angular.module('htmsMobileApp')

  .run(function (RouteFilter, Authentication) {

    //访客
    RouteFilter.register('guest', ['/login'], function () {
      return !Authentication.exists();
    }, '/login');

    //部门用户
    RouteFilter.register('BUMEN', ['/entBaseInfo','/yinhuanAll',
      '/addYinhuanByBumen',
      '/newBaseInfo',
      new RegExp('/infoDetail/*'),'/message',new RegExp('/messageDetail/*'),
      '/main', '/logout'], function () {
      return Authentication.typeEqBumen();
    }, '/main');

    //企业用户
    RouteFilter.register('QIYE', ['/qiyeyinhuanByid',
        '/addYinhuan',
        new RegExp('/addYinhuanQingkuang/*'),
        '/addZhenggaiQingkuang',
      '/entBaseInfo',
      '/newBaseInfo',
      new RegExp('/infoDetail/*'),new RegExp('/yinhuanDetail/*'),
      '/qiyeMain', '/logout'],
      function () {
      return Authentication.typeEqQiye();
    },
      '/qiyeMain');
  });
