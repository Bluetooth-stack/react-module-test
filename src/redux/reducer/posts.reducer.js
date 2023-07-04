import { FETCH_POST_FAILURE, FETCH_POST_SUCCESS, FETCH_POST_REQUEST } from '../actions/actionTypes';

let initial_state = {
    loading: false,
    data: [],
    error: ''
}

const postReducer = (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return { ...state, loading: true }
        case FETCH_POST_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: '' }
        case FETCH_POST_FAILURE:
            return { ...state, loading: false, data: [], error: action.payload }
        default:
            return state
    }
}

export default postReducer;

