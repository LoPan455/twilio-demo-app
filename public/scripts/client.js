var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/home', {
          templateUrl: '/views/home-view.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })

        .otherwise ( {
            redirectTo: '/home'
        })
}]);
