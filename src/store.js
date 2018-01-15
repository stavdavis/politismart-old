import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {lawmakerReducer} from './reducers';

export default createStore(
    lawmakerReducer,
    applyMiddleware(thunk)
);
