import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchFavourites } from '../../actions';
import ListingCard from '../common/ListingCard';
import ContentLoader from 'react-content-loader';

class Favourites extends Component {
	componentDidMount() {
		this.props.fetchFavourites();
	}
	renderFavouriteListings = () => {
		return this.props.myFavourites.map(({ _id, title, category, datePosted, images }) => {
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
				<h1 className="title is-1">Favourites</h1>
				{this.props.myFavourites.length ? this.renderFavouriteListings() : <ContentLoader />}
			</Fragment>
		);
	}
}
const mapStateToProps = state => {
	return { myFavourites: state.myFavourites };
};
export default connect(mapStateToProps, { fetchFavourites })(Favourites);
