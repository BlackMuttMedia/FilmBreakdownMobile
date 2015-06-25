
var Global = {
	/**
	 * For quota reasons we replaced the Rotten Tomatoes' API with a sample data of
	 * their very own API that lives in React Native's Github repo.
	 */
	REQUEST_URL: 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',
	GetDummyFilm: function() {
		return {
			title: 'Sunset Boulevard',
			poster_path: 'http://image.tmdb.org/t/p/w45//oFwzvRgfxJc0FUr2mwYTi10dk3G.jpg',
			release_date: '1950-08-04',
		}
	}
};

module.exports = Global;