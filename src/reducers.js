import {
    SEARCH_LAWMAKERS_REQUEST,
    SEARCH_LAWMAKERS_SUCCESS,
    SEARCH_LAWMAKERS_ERROR
} from './actions';

const initialState = {
    lawmakers: [],
    loading: false,
    error: null
};

export function lawmakerReducer(state=initialState, action) {
    if (action.type === SEARCH_LAWMAKERS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === SEARCH_LAWMAKERS_SUCCESS) {
        return Object.assign({}, state, {
            lawmakers: action.lawmakers,
            loading: false,
            error: null
        });
    }
    else if (action.type === SEARCH_LAWMAKERS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}
