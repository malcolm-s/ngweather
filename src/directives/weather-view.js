angular.module('app').directive('weatherView', function() {
  return  {
    scope: {},
    controller: ['$scope', 'WeatherService', function($scope, WeatherService) {
      $scope.weatherInfo = WeatherService.all();
    }],
    template: require('./weather-view.html')
  }
});
