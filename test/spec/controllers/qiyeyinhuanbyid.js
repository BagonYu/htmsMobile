'use strict';

describe('Controller: QiyeyinhuanbyidCtrl', function () {

  // load the controller's module
  beforeEach(module('htmsMobileApp'));

  var QiyeyinhuanbyidCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QiyeyinhuanbyidCtrl = $controller('QiyeyinhuanbyidCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
