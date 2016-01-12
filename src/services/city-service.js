angular.module('app').factory('CityService', function($http) {
  return {
    all: function() {
      var url = "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json";

      $http.get(url).then(function(res) {
        var data = res.data["United Kingdom"];
        console.log(data);
        var cityData = data.map(function(city) {
          return { name: city, country: 'uk' };
        });

        console.log(cityData);
      });

      return [
        { name: 'London', country: 'uk' },
        { name: 'Paris', country: 'fr' },
        { name: 'Reykjavik', country: 'is' },
        { name: 'Helsinki', country: 'fi' }
      ];
    }
  };
});
