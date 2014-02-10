'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('mojApp'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('should do something', function () {
    expect(!!SearchCtrl).toBe(true);
  });
});
