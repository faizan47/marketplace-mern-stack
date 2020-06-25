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
			<figure key={i} onClick={() => this.setMainImage(image)} className="image is-96x96 is-inline-block mr-1">
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
							<div className="card">
								<div className="card-image">
									<figure className="image is-3by2">
										<img
											className="object-fit-cover"
											src={this.state.mainImage}
											alt="main listing image"
										/>
									</figure>
								</div>
								<div className="card-content">
									<div className="media-left">{this.renderImages()}</div>
									<div className="content">
										<h1 className="title is-2">{this.props.currentListing.title}</h1>
										<div className="level">
											<div className="level-left field is-grouped is-grouped-multiline">
												<div className="control">
													<span class="tags has-addons level-item">
														<span class="tag">Category</span>
														<span class="tag is-info is-light">
															{this.props.currentListing.category}
														</span>
													</span>
												</div>
												<div className="control">
													<span class="tags has-addons level-item">
														<span class="tag">Quantity</span>
														<span class="tag is-info is-light">
															{this.props.currentListing.quantity}
														</span>
													</span>
												</div>
											</div>
											<div className="level-right">
												<span className="level-item tags has-addons level-item">
													<span class="tag icon">
														<i className="fas fa-clock" />
													</span>
													<span class="tag is-light">
														{time_ago_in_words(
															new Date(this.props.currentListing.datePosted)
														)}
													</span>
												</span>
											</div>
										</div>
										<hr /> <h2 className="title description is-4">Description </h2>
										<p>{this.props.currentListing.description}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="card">
								<div className="card-content">
									<span className="has-text-grey-dark mb-1">Retailer Information</span>
									<div className="media mt-2">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													src="https://bulma.io/images/placeholders/96x96.png"
													alt="Placeholder image"
												/>
											</figure>
										</div>
										<div className="media-content">
											<p className="title is-4">Lucky Stores & Co.</p>
											<p className="subtitle is-6 has-text-grey">Member since Sept 2019</p>
										</div>
									</div>
									<div className="content">
										<button className="button is-primary is-normal is-fullwidth">
											<span class="icon is-small">
												<i class="far fa-envelope" />
											</span>
											<span>Send a quote</span>
										</button>
										<span className="cursor icon has-text-danger mt-2 is-large">
											<i className="far fa-heart fa-lg" />
										</span>
									</div>
								</div>
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
