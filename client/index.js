/**
 * Entry point for the entire app. Currently this is also where we keep the
 * Router.
 */

var React  = require('react');
var Router = require('react-router');

var routes = require('./routes.js');

document.addEventListener('DOMContentLoaded', () => {
  Router.run(routes, (Handler, state) => {
    React.render(
      <Handler params={state.params} />,
      document.body
    );
  });
});

