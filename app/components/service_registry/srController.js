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



      $scope.employee = {};
        $scope.employees = [
            { name: 'John Doe', email: 'john@doe.com' },
            { name: 'Sally Smith', email: 'sally@smith.com' },
            { name: 'Linda Mayle', email: 'linda@mayle.com' },
            { name: 'Harry Velez', email: 'harry@velez.com' },
            { name: 'Cheryl Aubuchon', email: 'cheryl@aubuchon.com' },
            { name: 'Cindy Cuffee', email: 'cindy@cuffee.com' },
            { name: 'Jason Thompson', email: 'jason@thompson.com' },
            { name: 'Frederick Carter', email: 'frederick@carter.com' },
            { name: 'Tommy Harris', email: 'tommy@harris.com' },
            { name: 'Jerome Brown', email: 'jerome@brown.com' },
            { name: 'Chelsie Williamson', email: 'chelsie@williamson.com' },
            { name: 'Deborah Grimm', email: 'deborah@grimm.com' },
            { name: 'Roise Baily', email: 'roise@baily.com' },
            { name: 'Rodney Bauch', email: 'rodney@bauch.com' }
        ];
    });
  });
