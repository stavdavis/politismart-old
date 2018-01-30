import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {lawmakerReducer} from './reducers/lawmaker-search-reducer';

export default createStore(
    lawmakerReducer,
    applyMiddleware(thunk)
);