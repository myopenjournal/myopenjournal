'use strict';

angular.module('mojApp', ['ui.router'])
.config(function(states, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});
