import React, { Component } from 'react';
import FormTemplate from '../formComponents/FormTemplate';
import { createListingInputs } from '../../formInputs/retailer/createListing';
import { connect } from 'react-redux';
import { fetchListingById, updateListing } from '../../actions';
import ContentLoader from 'react-content-loader';

class EditListing extends Component {
	listingId = this.props.match.params.listingId;

	componentDidMount() {
		this.props.fetchListingById(this.listingId);
	}
	onSubmit = values => {
		this.props.updateListing(values, this.props.history);
	};
	render() {
		if (!this.props.currentListing) {
			return (
				<section className="section">
					<ContentLoader />
				</section>
			);
		} else {
			return (
				<section className="section">
					<h1 className="title">Edit Listing</h1>
					<FormTemplate
						initialValues={this.props.currentListing}
						inputs={createListingInputs}
						onSubmit={this.onSubmit}
						form="editListing"
					/>
				</section>
			);
		}
	}
}
const mapStateToProps = state => ({ currentListing: state.myListings[0] });

export default connect(mapStateToProps, { fetchListingById, updateListing })(EditListing);
