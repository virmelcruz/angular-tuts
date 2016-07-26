'use strict';

/**
 * @ngdoc function
 * @name angularTutsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTutsApp
 */
angular.module('angularTutsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.itak = "itac";
  });
