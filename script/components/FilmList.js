/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ListView,
} = React;

var FilmRow = require('./FilmRow');
var Styles = require('../Styles');

var FilmList = React.createClass({
  render: function() {
    return (
      <ListView
        dataSource={this.props.filmsData}
        renderRow={(film) => <FilmRow filmData={film} />} />
    );
  }
});

module.exports = FilmList;