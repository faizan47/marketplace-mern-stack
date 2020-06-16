import React, { Component } from 'react';
import FormTemplate from '../FormTemplate';
import { createListingInputs } from './listingFileInputs';

class CreateListing extends Component {
	onSubmit = values => {
		console.log(values);
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

export default CreateListing;
