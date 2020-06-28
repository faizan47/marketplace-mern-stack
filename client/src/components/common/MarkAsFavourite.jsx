import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../actions';

class MarkAsFavourite extends Component {
	toggleFavourites = () => {
		if (!this.props.favourites) return; // handle non logged in users
		if (!this.props.favourites.includes(this.props.listingId)) {
			return this.props.addToFavourites(this.props.listingId);
		}
		return this.props.removeFromFavourites(this.props.listingId);
	};
	renderIconClass = () => {
		if (!this.props.favourites) return 'far';
		return this.props.favourites.includes(this.props.listingId) ? 'fas' : 'far';
	};
	render() {
		return (
			<span className="level-item">
				<span onClick={this.toggleFavourites} className="cursor icon has-text-danger">
					<i className={`${this.renderIconClass()} fa-heart fa-lg `} />
				</span>
			</span>
		);
	}
}
const mapStateToProps = state => ({ favourites: state.auth.favourites });

export default connect(mapStateToProps, { addToFavourites, removeFromFavourites })(MarkAsFavourite);
