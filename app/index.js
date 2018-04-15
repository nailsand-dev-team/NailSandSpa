(function () {
    alert('index loaded');
    
    var app = angular.module('main-app', [ui-router]);
    
    app.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'index.html'
            })
            .state('home', {
                url: '/home',
                controller: 'HomeController',
                templateUrl: '/pages/home/home.html'
            });
    });
});