import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../MoviesList';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies';

class MoviesPage extends React.Component{
    static propTypes = {
        movies: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchMovies();
    }

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

const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);