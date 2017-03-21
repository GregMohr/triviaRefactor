var app = angular.module('app', ['ngRoute', 'angularMoment'])
  .config(function($routeProvider){
    $routeProvider
      .when('/login', {
        templateUrl: 'partials/login.html'
      })
      .when('/dashboard', {
        templateUrl: 'partials/dashboard.html'
      })
      .when('/new', {
        templateUrl: 'partials/new.html'
      })
      .when('/play', {
        templateUrl: 'partials/play.html'
      })
      .otherwise({
        redirectTo: '/login'
      })
  })
