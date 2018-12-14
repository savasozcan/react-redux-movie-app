export { FETCHED_MOVIES } from '../actions/movies';

const InitialState = {
    fetching: false,
    fetched: false,
    movies: [],
    error: []
}

export default (state = InitialState, action) => {
    switch (action.type) {
        case 'FETCHED_MOVIES':
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
}