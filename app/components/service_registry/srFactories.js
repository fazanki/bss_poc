angular.module('appServiceRegirty')
    .factory('ComputeService', function ($http) {
      var url = 'mock.computesevice.json';
      return {
        get: function () {
            return $http.get(url);
        }
      };
    });