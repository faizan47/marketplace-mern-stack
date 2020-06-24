import React, { Component } from 'react';
import ListingCard from '../common/ListingCard';
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
			<section className="section">
				<h1 className="title is-1">My Listings</h1>
				{this.renderListings()}
			</section>
		);
	}
}

const mapStateToProps = state => ({ myListings: state.myListings });

export default connect(mapStateToProps, { fetchMyListings })(MyListings);
