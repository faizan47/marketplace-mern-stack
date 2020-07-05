import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../actions';

class MarkAsFavourite extends Component {
	isFavourite = () => {
		return this.props.favourites.find(({ _id }) => _id === this.props.listingId);
	};
	renderIconClass = () => {
		if (!this.props.favourites) return 'far';
		return this.isFavourite() ? 'fas' : 'far';
	};
	toggleFavourite = () => {
		if (!this.props.favourites) return;
		if (!this.isFavourite()) {
			return this.props.addToFavourites(this.props.listingId);
		}
		return this.props.removeFromFavourites(this.props.listingId);
	};
	render() {
		return (
			<span className="level-item">
				<span onClick={this.toggleFavourite} className="cursor icon has-text-danger">
					<i className={`${this.renderIconClass()} fa-heart fa-2x`} />
				</span>
			</span>
		);
	}
}
const mapStateToProps = ({ user: { favourites } }) => ({ favourites });

export default connect(mapStateToProps, { addToFavourites, removeFromFavourites })(MarkAsFavourite);
