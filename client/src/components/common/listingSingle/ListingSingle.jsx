import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchListingById } from '../../../actions';
import ContentLoader from 'react-content-loader';
import ImageSlider from './ImageSlider';
import RetailerInformation from './RetailerInformation';
import ListingContent from './ListingContent';
import ActionButtons from './ActionButtons';

class ListingSingle extends Component {
	componentDidMount() {
		this.props.fetchListingById(this.props.match.params.listingId);
	}
	render() {
		if (!this.props.currentListing) {
			return <ContentLoader />;
		} else {
			return (
				<Fragment>
					<div className="columns">
						<div className="column is-two-thirds">
							<div className="card">
								<ImageSlider images={this.props.currentListing.images} />
								<div className="card-content">
									<ListingContent currentListing={this.props.currentListing} />
								</div>
							</div>
						</div>
						<div className="column">
							<div className="card">
								<div className="card-content">
									<ActionButtons
										listingId={this.props.match.params.listingId}
										title={this.props.currentListing.title}
										description={this.props.currentListing.description}
									/>
									<hr />
									<RetailerInformation
										listingId={this.props.match.params.listingId}
										user={this.props.currentListing._user}
									/>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => ({
	currentListing: state.myListings.find(({ _id }) => _id === ownProps.match.params.listingId)
});

export default connect(mapStateToProps, { fetchListingById })(ListingSingle);
