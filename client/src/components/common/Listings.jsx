import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions';
import ListingCard from './ListingCard';

class Listings extends Component {
	componentDidMount() {
		this.props.fetchListings();
	}

	renderListings = () =>
		this.props.listings.map(({ _id, title, category, datePosted, images }) => {
			return (
				<ListingCard
					key={_id}
					title={title}
					category={category}
					datePosted={datePosted}
					images={images}
					listingId={_id}
					listingSlug={title.split(' ').join('-').toLowerCase()}
				/>
			);
		});

	render() {
		return (
			<section className="section">
				<h1 className="title is-1">Listings</h1>
				{this.renderListings()}
			</section>
		);
	}
}

const mapStateToProps = state => ({ listings: state.listings });
export default connect(mapStateToProps, { fetchListings })(Listings);
