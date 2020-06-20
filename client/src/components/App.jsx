import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import distributorRoutes from '../routes/distributorRoutes';
import retailerRoutes from '../routes/retailerRoutes';
import commonRoutes from '../routes/commonRoutes';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					{commonRoutes()}
					{distributorRoutes()}
					{retailerRoutes()}
				</div>
			</BrowserRouter>
		);
	}
}
