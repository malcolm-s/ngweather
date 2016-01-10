angular.module('app').factory('CityService', function() {
  return {
    all: function() {
      return [
        { name: 'London', country: 'uk' },
        { name: 'Paris', country: 'fr' },
        { name: 'Reykjavik', country: 'is' },
        { name: 'Helsinki', country: 'fi' }
      ];
    }
  };
});
