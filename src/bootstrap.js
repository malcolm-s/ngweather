require('angular');

require('./app');

requireAll(require.context("./pages", true, /\.js$/));
requireAll(require.context("./directives", true, /\.js$/));
requireAll(require.context("./services"), true, /\.js$/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
