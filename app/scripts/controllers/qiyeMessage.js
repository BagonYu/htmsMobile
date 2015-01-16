/**
 * Created by win8 on 2015/1/15.
 */
/**
 * Created by win8 on 2015/1/14.
 */
'use strict';
/**
 * @ngdoc function
 * @name htmsMobileApp.controller:MessageCtrl
 * @description
 * # MessageCtrl 消息信息的控制器
 * Controller of the htmsMobileApp
 */
angular.module('htmsMobileApp').value("qiyeMessageListxConfig", {
  template: "views/tpl/qiyeMessage/list-tpl.html",
  searchBarTemplate: "views/tpl/qiyeMessage/search-bar-tpl.html",
  itemsTemplate: "views/tpl/qiyeMessage/items-tpl.html",
  itemTemplate: "views/tpl/qiyeMessage/item-tpl.html"
})
  .controller('QiyeMessageCtrl', function($scope,$http) {
    //$scope.nestedHandlers = {
    //  itemBtnClick: function(item, $event) {
    //    $event.cancelBubble = true;
    //    alert('Send Message to: ' + item.text);
    //    console.log(item, $event);
    //  }
    //};
    //$http.get("views/db/entBaseInfos.json").success(
    //  function(data,status,headers,config){
    //    $scope.entBaseInfos = data;
    //  }).error(function(data,status,headers,config){
    //    console.log('error')
    //  });
  }).controller('QiyeMessageDetailCtrl',function($scope,$routeParams,$location){
    console.log($routeParams.id)
  }).controller("qiyeMessageListxController", function ($scope, $element, $attrs, $transclude, $templateCache,$modal,$log ,qiyeMessageListxConfig,RouteFilter) {
    $scope.canAccess = function(route)
    {
      return RouteFilter.canAccess(route);
  }
$scope.searchActionItems = ['全部', '自查自报工作提醒', '核查、审核信息通报','通知','约谈提醒','自定义'];
    $scope.searchActionItemSelected = {item : $scope.searchActionItems[0]};
    $scope.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          searchActionItems: function () {
            return $scope.searchActionItems;
          }
        }
      });
      modalInstance.result.then(function (searchActionItemSelected) {
        $scope.selected = searchActionItemSelected;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    $scope.doSearch = function(searchActionItem){
      if(searchActionItem=='自定义'){
        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size:'lg',
          resolve: {
            searchActionItems: function () {
              return $scope.searchActionItems;
            }
          }
        });
        modalInstance.result.then(function (searchActionItemSelected) {
          $scope.selected = searchActionItemSelected;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      }
      $scope.searchActionItemSelected = {item : searchActionItem};
    }
    $scope.searchBarTemplate = qiyeMessageListxConfig.searchBarTemplate;
    $scope.itemsTemplate = qiyeMessageListxConfig.itemsTemplate;
    $scope.itemTemplate = qiyeMessageListxConfig.itemTemplate;
    $scope.itemTpl = false;
    $scope.q = {val: ""};
    $scope.isSelected = function (item) {
      if (item.selected) {
        return "active"
      }
    };
    $scope.overItem = function (item) {
      return $scope.onMouseOver({item: item})
    };
    $scope.leaveItem = function (item) {
      return $scope.onMouseLeave({item: item})
    };
    $scope.selectItem = function (item) {
      var curItem, _i, _len, _ref;
      _ref = $scope.ngModel;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        curItem = _ref[_i];
        if (curItem.selected) {
          delete curItem.selected
        }
      }
      item.selected = true;
      return $scope.onSelect({item: item})
    };
    this.setItemTemplate = function (tpl, src) {
      $scope.itemTpl = true;
      if (src) {
        $scope.itemTemplate = src
      }
      return $templateCache.put("listxItemTpl", tpl)
    };
    return null
  })
  .directive("qiyeMessageListX", ["$http", "$templateCache", "qiyeMessageListxConfig", function ($http, $templateCache, qiyeMessageListxConfig) {
    return {
      restrict: "E",
      transclude: true,
      replace: true,
      require: "ngModel",
      scope: {
        title: "@",
        hideSearchBar: "@",
        itemHandlers: "&",
        loadUrl: "@",
        ngModel: "=",
        onSelect: "&",
        onLoad: "&",
        onMouseOver: "&",
        onMouseLeave: "&"
      },
      templateUrl: function (tElement, tAttrs) {
        return qiyeMessageListxConfig.template
      },
      controller: "qiyeMessageListxController",
      link: function (scope, iElement, iAttrs, controller) {
        if (scope.loadUrl) {
          $http.get(scope.loadUrl).success(function (data) {
            scope.ngModel = data;
            return scope.onLoad()
          })
        }
        $(".list-x-main div[ng-transclude]").remove();
        return $(".list-x-main").removeAttr("title")
      }
    }
  }]).directive("qiyeMessageItemTemplate", function () {
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      require: "^qiyeMessageListX",
      scope: {itemTemplate: "@"},
      template: "<div ng-transclude></div>",
      link: function (scope, iElement, iAttrs, controller) {
        return controller.setItemTemplate(iElement.html(), scope.itemsTemplate)
      }
    }
  });
