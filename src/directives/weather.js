angular.module('app').directive('weather', function() {
  return  {
    scope: {},
    controller: ['$scope', 'WeatherService', function($scope, WeatherService) {
      WeatherService.all().then(function(weather) {
        $scope.weatherInfo = weather;
      });
    }],
    template: require('./weather.html')
  }
});
