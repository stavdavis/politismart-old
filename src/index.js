import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import LawmakerSearch from './components/lawmaker_search';
import DropDownMenu from './components/nav-bar';
import store from './store';
import './index.css';

ReactDOM.render(
	<div className="main-page">
		<div className="top-bar">
			<div className="menu-container">
				<DropDownMenu />
			</div>
			<div className="site-logo">PolitiSmart</div>
		</div>
		<div className="instructions-and-results">
			<h1>Select your preferences to see matching U.S. senators</h1>
			<h2>(Members of congress and other political incumbents coming soon)</h2>
		    <Provider store={store}>
		        <LawmakerSearch />
		    </Provider>
		</div>
	</div>,
    document.getElementById('root')
);