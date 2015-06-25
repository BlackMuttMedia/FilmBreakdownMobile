/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
} = React;

var Styles = require('./script/Styles');
var Global = require('./script/Global');
var FilmRow = require('./script/components/FilmRow');

var FilmBreakdownMobile = React.createClass({
  getInitialState: function() {
    return { filmData: Global.GetDummyFilm() };
  },
  render: function() {
    console.log(this.state);
    return (
      <View style={Styles.container}>
        <View style={Styles.headingView}>
          <Text style={Styles.heading}>Films</Text>
        </View>
        <View style={Styles.body}>
          <FilmRow filmData={this.state.filmData} />
        </View>
      </View>
    );
  }
});

AppRegistry.registerComponent('FilmBreakdownMobile', () => FilmBreakdownMobile);
