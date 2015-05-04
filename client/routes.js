'use strict';

/**
 * Entry point for the entire app. Currently this is also where we keep the
 * Router.
 *
 * Note: Desipte eslint saying React is never used it actually will be used
 * after JSX is compiled, which means we still need to include it. As such I
 * disable ESLint here.
 */

/* eslint-disable */
var React = require('react');
var Router = require('react-router');
var { Link, Route, RouteHandler, DefaultRoute } = Router;
/* eslint-enable */

var App = require('./App/App.js');

var Home = React.createClass({
  render() {
    return (
      <div>
        <h1>Real-Time Stack</h1>
        <p>Check out the README for more info.</p>
      </div>
    );
  }
});

var routes = (
  <Route path='/' handler={ App }>
    <DefaultRoute name='home' handler={ Home } />
  </Route>
);

module.exports = routes;
