'use strict';
/**
 * 身份认证服务
 */
angular.module('htmsMobileApp')
  .factory('Authentication', function Authentication($q, $http, $timeout,Application) {

    var authenticatedUser = null;

    return  {

        getUserNameAndPasswd:function(){
          return {
            un:authenticatedUser.username,
            pw:authenticatedUser.passwd
          }
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
                deferred.reject("未知错误!");
            });

            return deferred.promise;
        },


        logout: function()
        {
            authenticatedUser = null;
        },

        //判断是否是部门用户
        typeEqBumen:function()
        {
          return this.exists() && authenticatedUser.type == "BUMEN";
        },
        //判断是否是企业用户
        typeEqQiye : function(){
          return this.exists() && authenticatedUser.type == "QIYE";
        }
    }
  });
