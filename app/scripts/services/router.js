'use strict';

angular.module('mojApp')
  .service('Router', function Router() {
    // Router Service API

    function init {
      states.forEach(function(newState) {
        $stateProvider.state(newState)
      });
    }

    return {
      init: init
    };
  });
