'use strict';
/**
 * 应用服务
 */
angular.module('htmsMobileApp')
  .factory('Application', function Application() {

    var ready = false, registeredListeners = [];

    var callListeners = function()
    {
        for (var i = registeredListeners.length - 1; i >= 0; i--) {
            registeredListeners[i]();
        }
    };

    return {
        isReady: function()
        {
            return ready;
        },
        cancelReady: function(){
          ready = false;
        },

        makeReady: function()
        {
            ready = true;

            //启动后要执行的函数,在登陆验证通过后启动应用
            callListeners();
        },

        registerListener: function(callback)
        {
            if(ready) callback();
            else      registeredListeners.push(callback);
        }
    }
  });
