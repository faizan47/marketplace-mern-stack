import React, { Component } from 'react';
import FormTemplate from '../../formComponents/FormTemplate';
import { searchInputs } from '../../../formInputs/common/searchInputs';
import { connect } from 'react-redux';
import { searchListings } from '../../../actions';

class ListingSidebar extends Component {
	onSubmit = ({ search, category }) => {
		this.props.searchListings(category === 'defaultSelect' ? { search } : { search, category });
	};
	render() {
		return (
			<div className="box px-5" id="filter-form">
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
