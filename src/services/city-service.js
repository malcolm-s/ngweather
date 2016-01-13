import {take} from "../utils/array";

angular.module('app').factory('CityService', function ($http) {
  const apiUrl = "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json";

  function toCityLocation(name) {
    return { name, country: 'uk' };
  }

  return {
    all() {
      return $http.get(apiUrl)
        .then(res => take(res.data["United Kingdom"], 10))
        .then(cities => cities.map(toCityLocation));
    }
  };
});
