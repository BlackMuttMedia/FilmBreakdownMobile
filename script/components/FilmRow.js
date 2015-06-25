/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} = React;

var Global = require('../Global');
var Styles = require('../Styles');
var posterBasePath = 'http://image.tmdb.org/t/p/w154';

var FilmRow = React.createClass({
  getInitialState: function(){
    return {input: ""};
  },
  render: function() {
    return (
      <View style={Styles.filmRow}>
        <Image
          source={{uri: Global.POSTER_BASE_URL + this.props.filmData.poster_path}}
          style={Styles.thumbnail} />
        <View style={Styles.rightContainer}>
          <Text style={Styles.title}>{this.props.filmData.title}</Text>
          <Text style={Styles.year}>{this.props.filmData.release_date}</Text>
        </View>
      </View>
    );
  }
});

module.exports = FilmRow;