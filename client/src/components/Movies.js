import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {
	render() {
		return (
			<div className="movies">
				{this.props.movies.map((movie, i) => {
					return <Movie movie={movie}/>
				})}
			</div>
		)
	}
}

export default Movies;