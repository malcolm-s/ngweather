angular.module('app').directive('weatherView', function() {
  return {
    scope: {
      info: '='
    },
    template: require('./weather-view.html')
  }
});
