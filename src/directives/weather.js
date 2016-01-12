angular.module('app').directive('weather', function() {
  return  {
    scope: {},
    controller: function($scope, WeatherService) {
      WeatherService.all().then(weather => {
        $scope.weatherInfo = weather;
      });
    },
    template: require('./weather.html')
  }
});
