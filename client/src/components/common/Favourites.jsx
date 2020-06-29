import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ListingCard from '../common/ListingCard';
import ContentLoader from 'react-content-loader';
import Message from './Message';

class Favourites extends Component {
	renderFavouriteListings = () => {
		return this.props.favourites.length ? (
			this.props.favourites.map(({ _id, title, category, datePosted, images }) => {
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
			})
		) : (
			<Message
				title="No favourites found!"
				message="Why not add some favourites?"
				link="/listings"
				linkText="Browse Listings"
			/>
		);
	};
	render() {
		return (
			<Fragment>
				<h1 className="title is-1">Favourites</h1>
				{this.props.favourites ? this.renderFavouriteListings() : <ContentLoader />}
			</Fragment>
		);
	}
}
const mapStateToProps = ({ user: { favourites } }) => ({ favourites });
export default connect(mapStateToProps, {})(Favourites);
