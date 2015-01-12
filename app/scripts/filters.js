angular.module('htmsMobileApp')

.run(function (RouteFilter, Authentication)
{
    RouteFilter.register('访客', ['/login'], function()
    {
        return ! Authentication.exists();
    }, '/login');

    RouteFilter.register('部门用户', ['/entBaseInfo','/newBaseInfo','/infoDetail/*'], function()
    {
        return Authentication.typeEqBumen();
    }, '/');

  RouteFilter.register('qiye用户', ['/newBaseInfo','/infoDetail/*'], function()
  {
    return Authentication.typeEqBumen();
  }, '/qiyeMain');
});
