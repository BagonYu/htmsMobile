'use strict';

/**
 * 路由过滤器，用于权限过滤
 */
angular.module('htmsMobileApp')
  .factory('RouteFilter', function Routefilter($location,Authentication) {

    var filters = [];

    var getFilter = function(route)
    {
        for (var i = filters.length - 1; i >= 0; i--) {
            for (var j = filters[i].routes.length - 1; j >= 0; j--) {

                if(matchRoute(filters[i].routes[j], route,filters[i].type))
                {
                    return filters[i];
                }
            };
        };
    }

    var matchRoute = function(filterRoute, route,filterType)
    {
      var user = Authentication.getUser();
      var userType = null;
      if(user){
        userType = user.type;
      }else{
        userType = "guest";
      }
        if(filterRoute instanceof RegExp)
        {
            return filterRoute.test(route) && filterType === userType;
        }

        else
        {
            return route === filterRoute && filterType === userType;
        }
    }

    return {
        canAccess: function(route)
        {
            var filter = getFilter(route);

          if(filter)
            return filter.callback();
          else
          return false;
        },

      //注册配置路由和相应的权限
        register: function(type, routes, callback, redirectUrl)
        {
            redirectUrl = typeof redirectUrl !== "undefined" ? redirectUrl : null;

            filters.push({
                type: type,
                routes:routes,
                callback: callback,
                redirectUrl: redirectUrl
            });
        },

        run: function(route)
        {
            var filter = getFilter(route);

            if(filter != null && filter.redirectUrl != null)
            {
                // 如果无法通过filters.js配置的路由地址回调函数，则跳转
                if(!filter.callback())
                {
                    $location.path(filter.redirectUrl);
                }
            }else{
              $location.path('/login')
            }
        }
    }
  });
