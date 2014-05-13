'use strict';

angular
  .module('frontEndStuffApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
	'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
