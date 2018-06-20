var app = angular.module('angular-app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '../views/landing.html',
    controller: 'landing-page-ct'
  })

  .when('/login', {
    templateUrl: '../views/login.html',
    controller: 'login-page-ct'
  })

  .when('/register', {
    templateUrl: '../views/register.html',
    controller: 'register-page-ct'
  })
})
