import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteListing } from '../../actions';
import { Link } from 'react-router-dom';
import MarkAsFavourite from './MarkAsFavourite';
import Modal from '../common/Modal';

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
					onExit={() => this.setState({ showModal: false })}
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
				<span className="level-item">
					<Link to={`edit/${listingId}`} className="cursor icon has-text-info">
						<i className="far fa-edit fa-lg" />
					</Link>
				</span>
				<span onClick={() => this.setState({ showModal: true })} className="level-item">
					<span className="cursor icon has-text-danger">
						<i className="far fa-trash-alt fa-lg" />
					</span>
				</span>
				{this.renderModal()}
			</div>
		) : (
			<div className="level-left">
				{/* <span className="level-item">
				<span className="cursor icon has-text-info">
					<i className="far fa-envelope fa-lg" />
				</span>
			</span> */}
				<MarkAsFavourite listingId={listingId} />
			</div>
		);
	}
}

export default connect(null, { deleteListing })(ListingMeta);
