/**
 * Created by pans on 15-1-19.
 */
/**
 * 封装的http服务，包含一个sessionKey，为了从服务器请求数据
 */
angular.module('htmsMobileApp')
  .factory('CustomHttp', function CustomHttp($http, Authentication) {
    return {
      get : function(url,config){
        if(url.indexOf('?')>-1){
          return $http.get(url + '&un='+Authentication.getUserNameAndPasswd().un+"&pw="+Authentication.getUserNameAndPasswd().pw,config);
        }else{
          return $http.get(url + '?un='+Authentication.getUserNameAndPasswd().un+"&pw="+Authentication.getUserNameAndPasswd().pw,config);
        }
      },
      del : function(url,config){
        if(url.indexOf('?')>-1){
          return $http.delete(url + '&un='+Authentication.getUserNameAndPasswd().un+"&pw="+Authentication.getUserNameAndPasswd().pw,config);
        }else{
          return $http.delete(url + '?un='+Authentication.getUserNameAndPasswd().un+"&pw="+Authentication.getUserNameAndPasswd().pw,config);
        }
      },
      head : function(url,config){
        if(url.indexOf('?')>-1){
          return $http.head(url + '&un='+Authentication.getUserNameAndPasswd().un+"&pw="+Authentication.getUserNameAndPasswd().pw,config);
        }else{
          return $http.head(url + '?un='+Authentication.getUserNameAndPasswd().un+"&pw="+Authentication.getUserNameAndPasswd().pw,config);
        }
      },
      jsonp : function(url,config){
        if(url.indexOf('?')>-1){
          return $http.jsonp(url + '&un='+Authentication.getUserNameAndPasswd().un+"&pw="+Authentication.getUserNameAndPasswd().pw,config);
        }else{
          return $http.jsonp(url + '?un='+Authentication.getUserNameAndPasswd().un+"&pw="+Authentication.getUserNameAndPasswd().pw,config);
        }
      },

      post : function(url,data,config){
          data.un = Authentication.getUserNameAndPasswd().un;
          data.pw = Authentication.getUserNameAndPasswd().pw;
          return $http.post(url,data,config);
      },
      put : function(url,data,config){
        data.un = Authentication.getUserNameAndPasswd().un;
        data.pw = Authentication.getUserNameAndPasswd().pw;
        return $http.put(url,data,config);
      },
      patch : function(url,data,config){
        data.un = Authentication.getUserNameAndPasswd().un;
        data.pw = Authentication.getUserNameAndPasswd().pw;
        return $http.patch(url,data,config);
      }
    }
  });
