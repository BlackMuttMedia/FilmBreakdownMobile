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

var Styles = require('../Styles');

var FilmRow = React.createClass({
  getInitialState: function(){
    return {input: ""};
  },
  render: function() {
    return (
      <View style={Styles.filmRow}>
        <Image
          source={{uri: this.props.filmData.poster_path}}
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