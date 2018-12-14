import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movies from "../reducers/movies";

const MoviesList = props => {
    const emptyMessage = (
        <p>There are no movies yet!</p>
    );

    const moviesList = (
        <div>
            Burası hazırlanacak!
        </div>
    )

    return(
        <div>
            { movies.length === 0 ? emptyMessage : moviesList }
        </div>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movies: PropTypes.array.isRequired
    }).isRequired
}

export default MoviesList;