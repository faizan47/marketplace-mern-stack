import React, { Component } from 'react';
import FormTemplate from '../formComponents/FormTemplate';
import { createListingInputs } from '../../formInputs/retailer/createListing';
import { connect } from 'react-redux';
import { fetchListingById } from '../../actions';

class EditListing extends Component {
	componentDidMount() {
		// console.log(this.props); //shows the props
		// this.props.fetchListingById();
	}
	onSubmit = async values => {
		this.props.createListing(values, this.props.history);
	};
	render() {
		return (
			<section className="section">
				<h1 className="title">Edit Listing</h1>
				<FormTemplate
					initialValues={{ category: 'defaultSelect' }}
					inputs={createListingInputs}
					onSubmit={this.onSubmit}
					form="editListing"
				/>
			</section>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	console.log(ownProps); //logs empty

	return {};
	return { currentListing: state.myListings[ownProps.match.params.listingId] };
};

export default connect(mapStateToProps, { fetchListingById })(EditListing);
