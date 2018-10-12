import React from 'react';

class Movie extends React.Component {
	render() {
		return (
			<div className="movie">
				<h1>{this.props.movie.title}</h1>
				<h1>{this.props.movie.director}</h1>
				<h1>{this.props.movie.producer}</h1>
			</div>
		)
	}
}

export default Movie;