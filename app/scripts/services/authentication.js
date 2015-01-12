'use strict';

angular.module('htmsMobileApp')
  .factory('Authentication', function Authentication($q, $http, $timeout,Application) {

    var authenticatedUser = null;

    return  {
        requestUser: function()
        {
            var deferred = $q.defer();

            $http.get('/api/user.json').success(function(user)
            {
                $timeout(function()
                {
                    // Check if user is defined first
                    if(user) {

                        authenticatedUser = user;
                    }

                    deferred.resolve(authenticatedUser);
                }, 0);

            }).error(function(error)
            {
                deferred.reject(error);
            });

            return deferred.promise;
        },

        getUser: function()
        {
            return authenticatedUser;
        },

        exists: function()
        {
            return authenticatedUser != null;
        },

        login: function(credentials)
        {
            var deferred = $q.defer();

            $http.get('/api/user.json', credentials).success(function(user)
            {
                if(user)
                {
                  authenticatedUser = user;
                  Application.makeReady();
                  deferred.resolve(user);
                }
                else
                {
                    deferred.reject('输入的用户名密码错误!');
                }

            }).error(function(error)
            {
                deferred.reject("输入的用户名密码错误");
            });

            return deferred.promise;
        },


        logout: function()
        {
            authenticatedUser = null;
        },

        isDeveloper: function()
        {
            return this.exists() && authenticatedUser.type == 'developer';
        },

        //判断是否是部门用户
        typeEqBumen:function()
        {
          return this.exists() && authenticatedUser.type == 0;
        },
        //判断是否是企业用户
        typeEqQiye : function(){
          return this.exists() && authenticatedUser.type == 1;
        }
    }
  });
