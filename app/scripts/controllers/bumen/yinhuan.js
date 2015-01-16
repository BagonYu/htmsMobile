'use strict';
/**
 * @ngdoc function
 * @name htmsMobileApp.controller:YinhuanCtrl
 * @description
 * # YinhuanCtrl 部门隐患操作的控制器
 * Controller of the htmsMobileApp
 */
angular.module('htmsMobileApp').value("listxConfig", {
  template: "views/tpl/list-tpl.html",
  searchBarTemplate: "views/tpl/search-bar-tpl.html",
  itemsTemplate: "views/tpl/items-tpl.html",
  itemTemplate: "views/tpl/item-tpl.html"
})
  .controller('YinhuanCtrl', function($scope,$http) {
    $http.get('views/db/yinhuans.json').success(function(data){
      $scope.yinhuans = data;
    }).error(function(error){
      console.error(error);
    });

  });
