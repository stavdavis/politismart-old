import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import LawmakerSearch from './components/lawmaker_search';
import MainNavBar from './components/nav-bar';
import RegistrationForm from './components/registration_form';
// import NewsletterSignupForm from './components/newsletter-signup-form';
import aboutPolitismart from './about-politismart.png';
import store from './store';
import authStore from './auth-store'
import './index.css';

ReactDOM.render(
	<div className="main-page">
		<div className="top-bar">
			<div className="menu-container">
				<MainNavBar />
			</div>
		</div>
		
		<div id="findLawmakers" className="main-page-sections instructions-and-results">
			<h1>Find your matching lawmakers</h1>
			<h2>Select your preferences to see matching U.S. senators</h2>
			<h4>(Members of congress and other political incumbents coming soon)</h4>
		    <Provider store={store}>
		        <LawmakerSearch />
		    </Provider>
		</div>

		<div id="about" className="main-page-sections about-section">
			<h1>About PolitiSmart</h1>
			<h2>PolitiSmart helps you see beyond the political cookie-cutter.</h2>
			<div className="text-box about-text">
				'Republican' & 'Democrat' are irrelevant terms.<br/> 
				What if you are pro choice, but also anti gun control?<br/>
				What if you support same-sex marriage, but don't believe in clean energy?<br/>
				Turns out, there are plenty of lawmakers who don't fall into simple	buckets.
				<h3>PolitiSmart helps you find them.</h3>
				<img className="about-image" src={aboutPolitismart} alt="process diagram"/>
			</div>
		</div>

		<div id="contribute" className="main-page-sections contribute-section">
			<h1>Optimize your contributions - coming soon</h1>
			<h2>Political donations that go directly to your best matched lawmakers.</h2>
			<div className="text-box contribute-text">
				Not to PACs.<br/>
				Not to parties.<br/>
				Not to lobbyists.<br/>
				Not to spin-doctors.<br/>
				Your political contribution will be divvied up by our algorithm and sent to the lawmakers who 
				represent you best and who need it the most.<br/>
				<br/>
				<h3>PolitiSmart helps you contribute directly to those who need it most.</h3>
			</div>
		</div>

		<div id="stats" className="main-page-sections stats-section">
			<h1>Stats - coming soon</h1>
			<div className="text-box stats-text">
				Stay tuned for our stats dashboard - aggregating the totals contributed to date and
				summarizing our impact on the political landscape.
			</div>
		</div>

		<div id="signup" className="main-page-sections signup-section">
			<h1>Login/Register</h1>
		    <Provider store={authStore}>
		        <RegistrationForm />
		    </Provider>
		</div>

	</div>,
    document.getElementById('root')
);