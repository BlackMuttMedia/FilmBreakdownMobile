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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
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
    borderWidth: 1
  },
});

module.exports = Styles;