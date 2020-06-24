import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchListingById } from '../../actions';
import ContentLoader from 'react-content-loader';
import time_ago_in_words from 'time_ago_in_words';

class ListingSingle extends Component {
	state = { mainImage: '' };
	async componentDidMount() {
		const { listingId } = this.props.history.location.state;
		await this.props.fetchListingById(listingId);
		this.setState({ mainImage: this.props.currentListing.images[0] });
	}
	setMainImage = url => {
		this.setState({ mainImage: url });
	};
	renderImages = () => {
		return this.props.currentListing.images.map((image, i) => (
			<figure key={i} onClick={() => this.setMainImage(image)} className="image  is-96x96 is-inline-block mr-1">
				<img src={image} alt="listing sample" />
			</figure>
		));
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
				<section className="section">
					<div className="columns">
						<div className="column is-two-thirds">
							<figure className="image listing-main-image">
								<img src={this.state.mainImage} alt="main listing image" />
							</figure>
							<div className="media">
								<div className="media-left">{this.renderImages()}</div>
							</div>
							<div className="card">
								<div className="content">
									<h1 className="title is-2">{this.props.currentListing.title}</h1>
									<p>{this.props.currentListing.description}</p>
									<div className="level-left">
										<span className="tag is-info is-light is-medium bottom-absolute">
											{this.props.currentListing.category}
										</span>
										<span className="tag is-light">
											{time_ago_in_words(new Date(this.props.currentListing.datePosted))}
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="cont">
								<h3 className="title">Retailer profile will come here</h3>
							</div>
						</div>
					</div>
				</section>
			);
		}
	}
}

const mapStateToProps = state => {
	return { currentListing: state.myListings[0] };
};

export default connect(mapStateToProps, { fetchListingById })(ListingSingle);
