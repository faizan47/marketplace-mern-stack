import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import SignUpForm from './forms/auth/SignUpForm';
import SignInForm from './forms/auth/SignInForm';
import CreateListing from './forms/listing/CreateListing';

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
					<Route path="/createListing">
						<CreateListing />
					</Route>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
