import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchListingById } from '../../actions';
import ContentLoader from 'react-content-loader';

class ListingSingle extends Component {
	componentDidMount() {
		const { listingId } = this.props.history.location.state;
		console.log(listingId);

		this.props.fetchListingById(listingId);
	}
	render() {
		// console.log(this.props.history.location);
		console.log(this.props.currentListing);

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
					{this.props.currentListing.title}
				</section>
			);
		}
	}
}

const mapStateToProps = state => {
	console.log(state);

	return { currentListing: state.myListings[0] };
};

export default connect(mapStateToProps, { fetchListingById })(ListingSingle);
