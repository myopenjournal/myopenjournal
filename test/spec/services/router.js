'use strict';

describe('Service: Router', function () {

  // load the service's module
  beforeEach(module('mojApp'));

  // instantiate service
  var Router;
  beforeEach(inject(function (_Router_) {
    Router = _Router_;
  }));

  it('should do something', function () {
    expect(!!Router).toBe(true);
  });

});
