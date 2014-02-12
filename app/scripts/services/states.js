'use strict';

(function() {
  
  var home = {
    name: 'home',
    templateUrl: 'views/home.html',
    url: '/',
    controller: 'HomeCtrl'
  };

  var sidenav = {
    name: 'sidenav',
    templateUrl: 'views/sidenav.html',
    abstract: true
  };

  var search = {
    name: 'search',
    templateUrl: 'views/search.html',
    parent: sidenav,
    url: '/search',
    controller: 'SearchCtrl'
  };

  angular.module('mojApp')
  .constant('states', [ sidenav, home, search ]);
})();
