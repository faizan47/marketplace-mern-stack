import React, { Component } from 'react';
import FormTemplate from '../formComponents/FormTemplate';
import { createListingInputs } from '../../formInputs/retailer/createListing';
import { connect } from 'react-redux';
import { fetchListingById, updateListing } from '../../actions';

class EditListing extends Component {
	listingId = this.props.match.params.listingId;

	componentDidMount() {
		this.props.fetchListingById(this.listingId);
	}
	onSubmit = async values => {
		// console.log(values.images, 'NEW');
		// console.log(this.props.currentListing.images);
		this.props.updateListing(values, this.props.history);
	};
	render() {
		if (!this.props.currentListing) {
			return (
				<section className="section">
					<h3 className="title">Loading....</h3>
				</section>
			);
		} else {
			console.log(this.props.currentListing);

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
