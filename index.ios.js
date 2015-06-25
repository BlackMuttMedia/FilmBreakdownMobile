/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ListView,
  Text,
  View,
} = React;

var Styles = require('./script/Styles');
var Global = require('./script/Global');
var FilmList = require('./script/components/FilmList');

var FilmBreakdownMobile = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    var films = Global.GetDummyFilms();
    
    return { filmsData: ds.cloneWithRows(films) };
  },
  render: function() {
    return (
      <View style={Styles.container}>
        <View style={Styles.headingView}>
          <Text style={Styles.heading}>Films</Text>
        </View>
        <View style={Styles.body}>
          <FilmList filmsData={this.state.filmsData} />
        </View>
      </View>
    );
  }
});

AppRegistry.registerComponent('FilmBreakdownMobile', () => FilmBreakdownMobile);
