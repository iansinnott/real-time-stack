/**
 * The App. This is the global component within which all other components are
 * nested. As such global requirements are addedd here, such as font-awesome.
 * Also note that the App.styl file is the global stylus file as it applies to
 * the root component.
 *
 * Note: Since this is a simple example app all components are defined within
 * this file, however in a real project we would likely separate these into
 * separate components.
 */

var React  = require('react');
var { Link, RouteHandler } = require('react-router');

// Global stylesheet
require('./App.styl');

require('font-awesome-webpack');

module.exports = React.createClass({
  render() {
    return (
      <div className="app">
        <header className="header container"></header>
        <div className="container content">
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
});

