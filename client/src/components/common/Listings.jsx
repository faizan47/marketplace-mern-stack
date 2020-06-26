import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions';
import ListingCard from './ListingCard';
import ContentLoader from 'react-content-loader';

class Listings extends Component {
	componentDidMount() {
		this.props.fetchListings();
	}

	renderListings = () => {
		return this.props.listings.map(({ _id, title, category, datePosted, images }) => {
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
	};

	render() {
		return (
			<Fragment>
				<h1 className="title is-1">Listings</h1>
				{this.props.listings.length ? this.renderListings() : <ContentLoader />}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({ listings: state.listings });
export default connect(mapStateToProps, { fetchListings })(Listings);
