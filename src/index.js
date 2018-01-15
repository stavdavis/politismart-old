import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import LawmakerSearch from './components/lawmaker_search';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <LawmakerSearch />
    </Provider>,
    document.getElementById('root')
);