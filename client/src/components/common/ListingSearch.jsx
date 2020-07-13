import React, { Component } from 'react';
import FormTemplate from '../formComponents/FormTemplate';
import { searchInputs } from '../../formInputs/common/searchInputs';
import { connect } from 'react-redux';
import { searchListings } from '../../actions';
class ListingSidebar extends Component {
	onSubmit = values => {
		this.props.searchListings(values);
		// initialValues={this.props.currentListing}
		// 			inputs={createListingInputs}
		// 			onSubmit={this.onSubmit}
		// 			form="editListing"
		// 			SubmitBtnText="Update Listing"
		// 			cancelBtnLink="/myListings"
		console.log(values);
	};
	render() {
		return (
			<div className="box px-5" id="filter-form">
				<h1 className="title is-size-6">Search</h1>
				<FormTemplate
					initialValues={{ category: 'defaultSelect' }}
					form="searchListings"
					hideCancel
					SubmitBtnText="Search"
					onSubmit={this.onSubmit}
					inputs={searchInputs}
				/>
			</div>
		);
	}
}

export default connect(null, { searchListings })(ListingSidebar);
