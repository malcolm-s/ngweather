angular.module('app').directive('weatherView', function() {
  return {
    scope: {
      info: '='
    },
    controller: [$scope, function($scope) {

    }],
    template: require('./weather-view.html')
  }
});
