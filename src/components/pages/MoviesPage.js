import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../MoviesList';
import { connect } from 'react-redux';

class MoviesPage extends React.Component{
    static propTypes = {
        movies: PropTypes.array.isRequired
    };

    render() {
        return(
            <div>
                <h1>Movies Page</h1>
                <MoviesList></MoviesList>
            </div>
        );
    }
}

const mapStateToProps  = ({ movies }) => {
    return {
        movies
    }
};

export default connect(mapStateToProps)(MoviesPage);