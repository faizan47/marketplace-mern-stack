import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import SignUpForm from './form/SignUpForm';
import SignInForm from './form/SignInForm';
import CreateAd from './form/CreateAd';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Route path="/">
						<Header />
					</Route>
					<Route path="/signup">
						<SignUpForm />
					</Route>
					<Route path="/signin">
						<SignInForm />
					</Route>
					<Route path="/createAd">
						<CreateAd />
					</Route>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
