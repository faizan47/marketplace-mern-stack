import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import SignUpForm from './SignUpForm';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Header />
					<Route path="/" />
					<Route path="/signup">
						<SignUpForm />
					</Route>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
