angular.module('app').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/studentTemplates/nameForm.html'
    });
}]);
