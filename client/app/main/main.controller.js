'use strict';

angular.module('jscsSpinApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      var x = '';
      $scope.awesomeThings = awesomeThings
    });

    $scope.addThing = function() {
      // jscs: disable
      if ($scope['newThing'] === '') {
        // jscs: enable
        return;
      }
      $http.post('/api/things', {name: $scope.newThing});
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
