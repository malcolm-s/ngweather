angular.module('app').factory('WeatherService',
  ['$http', '$q', 'CityService',
  function($http, $q, CityService) {
    var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=2de143494c0b295cca9337e1e96b00e0&units=metric';

    function getWeather(city) {
      var location = city.name + "," + city.country;
      return $http.get(weatherApiUrl, {
        params: {
          q: location
        }
      }).then(toRainInfo);
    }

    function toRainInfo(weather) {
      var data = weather.data;
      return {
        location: data.name,
        raining: data.weather[0].main === 'Rain'
      };
    }

    return {
      all: function() {
        return CityService.all()
          .then(cities => $q.all(cities.map(getWeather)));
      }
    };
  }
]);
