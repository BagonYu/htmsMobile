'use strict';

/**
 * @ngdoc function
 * @name htmsMobileApp.controller:QiyeyinhuanbyidCtrl
 * @description
 * # QiyeyinhuanbyidCtrl
 * Controller of the htmsMobileApp
 */
angular.module('htmsMobileApp')
  .controller('QiyeyinhuanbyidCtrl', function($scope,$http) {
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
  }).controller('YinhuanDetailCtrl',function($scope,$routeParams){


    console.log($routeParams.id)
  })
  .controller("listxController", function ($scope, $element, $attrs, $transclude, $templateCache,$modal,$log ,listxConfig,RouteFilter) {
    $scope.canAccess = function(route)
    {
      return RouteFilter.canAccess(route);
    }
    $scope.searchActionItems = ['全部', '待审核', '已上报','已评级','自定义'];
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
    $scope.searchBarTemplate = listxConfig.searchBarTemplate;
    $scope.itemsTemplate = listxConfig.itemsTemplate;
    $scope.itemTemplate = listxConfig.itemTemplate;
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
  }).controller('ModalInstanceCtrl', function ($scope, $modalInstance, searchActionItems) {
    $scope.movies = ["广州-白云区-大门镇",
      "广州-天河区-钟村镇",
      "广州-海珠区-大门镇",
      "广州-萝岗区-阳光镇",
      "广州-天河区-黄圃镇"];
    $scope.ok = function () {
      angular.element('#searchBtn').val('自定义');
      $modalInstance.dismiss('cancel');
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
