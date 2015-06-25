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
  TextInput,
  View,
} = React;

var Styles = require('./script/Styles');
var Global = require('./script/Global');
var FilmList = require('./script/components/FilmList');
var TheMovieDb = require('./script/helpers/themoviedb');

var FilmBreakdownMobile = React.createClass({
  getInitialState: function() {
    var films = Global.GetDummyFilms();
    var filmsDS = this.getListViewDataSource(films);

    return { filmsData: filmsDS };
  },
  getListViewDataSource: function(data)
  {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    return ds.cloneWithRows(data);
  },
  searchForFilms: function(searchTerm, callback)
  {
    if(searchTerm == '')
    {
      this.setState(this.getInitialState());
    }
    else
    {
      TheMovieDb.search.getMovie({"query":escape(searchTerm), "search_type":"ngram", "include_adult":"false"}, 
            function(data)
            { 
              var results = JSON.parse(data).results.slice(0,6);
              callback(results); 
            }, 
            function(data) { });
    }
  },
  setFilmsState: function(films)
  {
    var filmsDS = this.getListViewDataSource(films);

    return this.setState({ filmsData: filmsDS });
  },
  render: function() {
    return (
      <View style={Styles.container}>
        <View style={Styles.headingView}>
          <Text style={Styles.heading}>Films</Text>
        </View>
        <TextInput style={Styles.textInput}
          placeholder='Search for a film ...'
          onChangeText={(text) => this.searchForFilms(text, this.setFilmsState)} />
        <View style={Styles.body}>
          <FilmList filmsData={this.state.filmsData} />
        </View>
      </View>
    );
  }
});

AppRegistry.registerComponent('FilmBreakdownMobile', () => FilmBreakdownMobile);
