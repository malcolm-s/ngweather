require('angular');

require('./app');

require('./pages/index');
require('./directives/app-header');
require('./directives/app-footer');
require('./directives/weather-view');
require('./services/city-service');
require('./services/weather-service');

//var fs = require('fs');
//function loadDirectory(dir) {
//  var files = fs.readdirSync(dir);
//  files
//  .filter(function(f) { return /\.js$/.test(f); })
//  .forEach(function(f) {
//    require('./' + f);
//  });
//}

//loadDirectory('pages');
//loadDirectory('directives');
//loadDirectory('services');
