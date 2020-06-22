import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import distributorRoutes from '../routes/distributorRoutes';
import retailerRoutes from '../routes/retailerRoutes';
import commonRoutes from '../routes/commonRoutes';
import Header from './common/Header';
import Footer from './common/Footer';
import ScrollToTop from './common/ScrollToTop';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<div className="container">
						<Route path="/">
							<Header />
						</Route>
						{commonRoutes()}
						{distributorRoutes()}
						{retailerRoutes()}
					</div>
					<Route path="/">
						<Footer />
					</Route>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}
