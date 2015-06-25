'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },
  filmRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
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
  },
  headingView: {
    textAlign: 'center',
    left: 0,
    right: 0,
    alignItems: 'center',
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