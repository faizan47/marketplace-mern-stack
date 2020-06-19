import React, { Component } from 'react';
import FormTemplate from '../FormTemplate';
import { createListingInputs } from './listingFileInputs';
import { connect } from 'react-redux';
import { createListing } from '../../../actions';
import { withRouter } from 'react-router-dom';

class CreateListing extends Component {
	onSubmit = async values => {
		this.props.createListing(values, this.props.history);
	};
	render() {
		return (
			<section className="section">
				<h1 className="title">Create a Listing</h1>
				<FormTemplate inputs={createListingInputs} onSubmit={this.onSubmit} form="createListing" />
			</section>
		);
	}
}

export default connect(null, { createListing })(withRouter(CreateListing));
