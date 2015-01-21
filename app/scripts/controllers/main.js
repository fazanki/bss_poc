'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'AngularJS',
      'Karma',
      'Protractor'
    ];
  });
