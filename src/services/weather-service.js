angular.module('app').factory('WeatherService', ['$http', function($http) {
  var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0';

  return {
    all: function() {
      return [
        { location: 'london', temperature: '25' },
        { location: 'paris', temperature: '30' },
        { location: 'reykjavik', temperature: '15' },
        { location: 'rome', temperature: '35' }
      ];
    }
  };
}]);
