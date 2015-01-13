'use strict';

describe('Controller: QiyemainCtrl', function () {

  // load the controller's module
  beforeEach(module('htmsMobileApp'));

  var QiyemainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QiyemainCtrl = $controller('QiyemainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
