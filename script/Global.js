
var Global = {
	/**
	 * For quota reasons we replaced the Rotten Tomatoes' API with a sample data of
	 * their very own API that lives in React Native's Github repo.
	 */
	REQUEST_URL: 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',
	GetDummyFilm: function() {
		return {
			id: 599,
			title: 'Sunset Boulevard',
			poster_path: 'http://image.tmdb.org/t/p/w154/oFwzvRgfxJc0FUr2mwYTi10dk3G.jpg',
			release_date: '1950-08-04',
		};
	},
	GetDummyFilms: function() {
		return [
			{
				id: 599,
				title: 'Sunset Boulevard',
				poster_path: 'http://image.tmdb.org/t/p/w154/oFwzvRgfxJc0FUr2mwYTi10dk3G.jpg',
				release_date: '1950-08-04',
			},
			{
				id: 550,
				title: 'Fight Club',
				poster_path: 'http://image.tmdb.org/t/p/w154/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg',
				release_date: '1999-10-14',
			},
			{
				id: 776,
				title: 'The Rules of the Game',
				poster_path: 'http://image.tmdb.org/t/p/w154/9g4fN1jrM52sgmOIJmg1D4kt6IT.jpg',
				release_date: '1939-06-08',
			},
			{
				id: 1389,
				title: 'Out of Sight',
				poster_path: 'http://image.tmdb.org/t/p/w154/ne7ym2aixXgmpagXBP5I1S6C7Sq.jpg',
				release_date: '1998-06-26',
			}
		];
	}
};

module.exports = Global;