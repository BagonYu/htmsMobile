'use strict';

describe('Controller: Forbidden403Ctrl', function () {

  // load the controller's module
  beforeEach(module('htmsMobileApp'));

  var Forbidden403Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Forbidden403Ctrl = $controller('Forbidden403Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
