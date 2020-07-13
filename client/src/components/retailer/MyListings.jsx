import React, { Component, Fragment } from 'react';
import ListingCard from '../common/listing/ListingCard';
import { connect } from 'react-redux';
import { fetchMyListings } from '../../actions';

class MyListings extends Component {
	componentDidMount() {
		this.props.fetchMyListings();
	}
	renderListings = () =>
		this.props.myListings.map(({ _id, title, category, datePosted, images }) => (
			<ListingCard
				key={_id}
				listingId={_id}
				title={title}
				category={category}
				datePosted={datePosted}
				images={images}
				role="retailer"
				listingSlug={title.split(' ').join('-').toLowerCase()}
			/>
		));
	render() {
		return (
			<Fragment>
				<h1 className="title is-1">My Listings</h1>
				{this.renderListings()}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({ myListings: state.myListings });

export default connect(mapStateToProps, { fetchMyListings })(MyListings);
