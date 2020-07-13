import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions';
import ListingCard from './ListingCard';
import ContentLoader from 'react-content-loader';
import ListingSearch from './ListingSearch';

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
				<div className="columns">
					<div className="column is-one-third">
						<ListingSearch />
					</div>
					<div className="column">
						{this.props.listings.length ? this.renderListings() : <ContentLoader />}
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ listings }) => ({ listings });
export default connect(mapStateToProps, { fetchListings })(Listings);
