'use strict';

/**
 * @ngdoc function
 * @name
 * @description
 * # SeriveRegisty
 * Controller of the appTestApp
 */
angular.module('appServiceRegirty')
  .controller('SeriveRegistyCtrl', function ($scope, ComputeService) {

    ComputeService.get().success(function(data){
      $scope.attributes = data.ossLocationAttributes.attribute;
      $scope.pricefactors = data.ossLocationPrices.price;
      $scope.businessscopes = data.businessScopes.businessScope;
      $scope.realm = data.realm;
      $scope.realmselected = {};
      $scope.message = data.message;

    });
  });
