/// <reference path="../../awardsappreciations.html" />
/// <reference path="../../awardsappreciations.html" />
/**
 * Created by Chandra_S05 on 5/25/2015.
 */

var adminApp = angular.module('adminApp', ['ngRoute']);
adminApp.controller('homeCtrl', function($scope) {
    $scope.displayName = "John";
});

adminApp.controller('demandMgmtCtrl', function($scope) {
    $scope.displayName = "John";

});

adminApp.controller('awardsCtrl', function($scope) {
    $scope.displayName = "John";

});
adminApp.controller('orgChartCtrl', function($scope) {
    $scope.displayName = "John";

});
  
adminApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){
    $routeProvider.
      when('/demand', {
        templateUrl: 'demandManagement.html',
        controller: 'demandMgmtCtrl'
      }).
      when('/awards', {
          templateUrl: 'awardsappreciations.html',
        controller: 'awardsCtrl'
      }).
     when('/Org', {
        templateUrl: 'OrgChart.html',
        controller: 'orgChartCtrl'
     }).
        when('/Index', {
            templateUrl: 'Home.html',
            controller: 'homeCtrl'
        }).
      otherwise({
        redirectTo: '403.html'
      });
      $locationProvider.html5Mode(true);
  }]);
