angular.module('appServiceRegirty')
  .directive('doubleField', function ($timeout) {
    return {
      restrict: 'EA',
      templateUrl: '/shared/doubleInput/double_inputView.html',
      replace: true,
      scope: {
        record: '=',
        atKey: '@',
        atValue: '@',
       // live: '@',
        required: '@'
       // event: '@'
      },

      require: '^form',

      link: function ($scope, element, attr, form) {

          // $scope.$on('record:invalid', function () {
          //   $scope[$scope.field].$setDirty();
          // });

          // $scope.types = FieldTypes;

          // $scope.remove = function (field) {
          //     delete $scope.record[field];
          //     $scope.blurUpdate();
          // };

          // $scope.blurUpdate = function () {
          //     console.log('valid= ' + form.$valid);
          //     if ($scope.live !== 'false' && form.$valid) {
          //         $scope.record.$update(function (updatedRecord) {
          //           $scope.record = updatedRecord;
          //         });
          //     }
          // };

          // var saveTimeout;
          // $scope.update = function () {
          //     $timeout.cancel(saveTimeout);
          //     saveTimeout = $timeout($scope.blurUpdate, 1000);
          // };
        }
      };

  });