import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchListingById } from '../../actions';
import Modal from './Modal';
import MarkAsFavourite from './MarkAsFavourite';
import ImageSlider from './listingSingle/ImageSlider';

import time_ago_in_words from 'time_ago_in_words';
import ContentLoader from 'react-content-loader';
import { Facebook, Twitter, Email } from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';
import ListingContent from './listingSingle/ListingContent';

class ListingSingle extends Component {
	state = { mainImage: '', displayModal: false };
	renderModal = () => {
		const URL = window.location.href;
		const { title, description } = this.props.currentListing;
		if (this.state.displayModal)
			return (
				<Modal onExit={this.onExit} title="Share this listing">
					<Email subject={`Check this out - ${title}`} url={URL} /> <Facebook url={URL} />
					<Twitter shareText={description} url={URL} />
				</Modal>
			);
	};
	onExit = () => this.setState({ displayModal: false });

	async componentDidMount() {
		await this.props.fetchListingById(this.props.match.params.listingId);
		this.setState({
			mainImage: this.props.currentListing.images[0] || 'https://bulma.io/images/placeholders/480x320.png'
		});
	}
	setMainImage = url => {
		this.setState({ mainImage: url });
	};
	renderThumbnail = (image, i) => (
		<figure key={i} onClick={() => this.setMainImage(image)} className="image is-96x96 is-inline-block mr-1">
			<img src={image} alt={`listing ${i}`} />
		</figure>
	);
	renderImages = () => {
		return this.props.currentListing.images.length
			? this.props.currentListing.images.map((image, i) => this.renderThumbnail(image, i))
			: this.renderThumbnail('https://bulma.io/images/placeholders/480x320.png');
	};
	render() {
		if (!this.props.currentListing) {
			return (
				<section className="section">
					<ContentLoader />
				</section>
			);
		} else {
			return (
				<Fragment>
					<div className="columns">
						<div className="column is-two-thirds">
							<div className="card">
								<ImageSlider mainImage={this.state.mainImage} />
								<div className="card-content">
									<div className="media-left">{this.renderImages()}</div>
									<ListingContent currentListing={this.props.currentListing} />
								</div>
							</div>
						</div>
						<div className="column">
							<div className="card">
								<div className="card-content">
									<div className="level single-listing-buttons-container">
										<span className="level-item">
											<span
												onClick={() => this.setState({ displayModal: true })}
												className="cursor icon"
											>
												<i className="fas fa-share-alt fa-2x" />
											</span>
										</span>
										<MarkAsFavourite listingId={this.props.match.paramslistingId} />
									</div>
									<hr />
									<span className="has-text-grey-dark mb-1">Retailer Information</span>
									<div className="media mt-2">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													className="is-rounded"
													src={`https://ui-avatars.com/api/?name=${this.props.currentListing
														._user.company}&background=3298dc&color=fff&format=svg`}
													alt="retailer"
												/>
											</figure>
										</div>
										<div className="media-content">
											<p className="title is-4">{this.props.currentListing._user.company}</p>
											<p className="subtitle is-6 has-text-grey">
												Member since{' '}
												{time_ago_in_words(new Date(this.props.currentListing._user.joinDate))}
											</p>
										</div>
									</div>
									<div className="content">
										<button className="button is-primary is-normal is-fullwidth">
											<span className="icon is-small">
												<i className="far fa-envelope" />
											</span>
											<span>Send a quyote</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					{this.renderModal()}
				</Fragment>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => ({
	currentListing: state.myListings.find(({ _id }) => _id === ownProps.match.params.listingId)
});

export default connect(mapStateToProps, { fetchListingById })(ListingSingle);
