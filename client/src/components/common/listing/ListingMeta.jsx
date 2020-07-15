import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteListing, markListingAsComplete } from '../../../actions';
import { Link } from 'react-router-dom';
import MarkAsFavourite from '../MarkAsFavourite';
import Modal from '../../common/Modal';

class ListingMeta extends Component {
	state = { showModal: false };
	renderModal = () => {
		if (this.state.showModal)
			return (
				<Modal
					action={{
						onConfirm: () => this.props.deleteListing(this.props.listingId),
						type: 'danger',
						buttonText: 'Delete'
					}}
					onModalExit={() => this.setState({ showModal: false })}
					title="Delete this listing?"
				>
					<p className="content">Are your sure you want this delete this listing?</p>
				</Modal>
			);
	};
	render() {
		const { role, listingId } = this.props;
		return role === 'retailer' ? (
			<div className="level-left">
				{this.props.status === 'published' ? (
					<Fragment>
						<span
							onClick={() => this.props.markListingAsComplete(this.props.listingId)}
							className="level-item"
						>
							<span className="cursor icon has-text-success">
								<i className="fas fa-check fa-2x" />
							</span>
						</span>
						<span className="level-item mx-4">
							<Link to={`edit/${listingId}`} className="cursor icon has-text-info">
								<i className="far fa-edit fa-2x" />
							</Link>
						</span>
					</Fragment>
				) : (
					<span className="tag is-success is-light is-medium mr-4">Listing Complete</span>
				)}
				<span onClick={() => this.props({ showModal: true })} className="level-item">
					<span className="cursor icon has-text-danger">
						<i className="far fa-trash-alt fa-2x" />
					</span>
				</span>
				{this.renderModal()}
			</div>
		) : (
			<div className="level-left">
				<MarkAsFavourite listingId={listingId} />
			</div>
		);
	}
}

export default connect(null, { deleteListing, markListingAsComplete })(ListingMeta);
