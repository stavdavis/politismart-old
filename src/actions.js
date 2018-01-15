import {search} from './support_funcs';

export const SEARCH_LAWMAKERS_REQUEST = 'SEARCH_LAWMAKERS_REQUEST';
export const searchLawmakersRequest = () => ({
    type: SEARCH_LAWMAKERS_REQUEST
});

export const SEARCH_LAWMAKERS_SUCCESS = 'SEARCH_LAWMAKERS_SUCCESS';
export const searchLawmakersSuccess = lawmakers => ({
    type: SEARCH_LAWMAKERS_SUCCESS,
    lawmakers
});

export const SEARCH_LAWMAKERS_ERROR = 'SEARCH_LAWMAKERS_ERROR';
export const searchLawmakersError = error => ({
    type: SEARCH_LAWMAKERS_ERROR,
    error
});

export const searchLawmakers = name => dispatch => {
    dispatch(searchLawmakersRequest());
    search(name)
        .then(lawmakers => dispatch(searchLawmakersSuccess(lawmakers)))
        .catch(error => dispatch(searchLawmakersError(error)));
};

