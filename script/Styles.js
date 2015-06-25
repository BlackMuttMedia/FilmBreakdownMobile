'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DDDDDD',
    paddingTop: 20,
  },
  filmRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  heading: {
    flexDirection: 'row',
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'white',
    left: 0,
    right: 0,
  },
  headingView: {
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#444444'
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  leftContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
  rightContainer: {
    width: 300,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  topSearch: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "black",
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    left: 0,
    right: 0,
  },
});

module.exports = Styles;