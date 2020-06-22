import React from 'react';
import { connect } from 'react-redux';
import { deleteListing } from '../../actions';
import { Link } from 'react-router-dom';

const ListingMeta = ({ role, listingId, deleteListing }) => {
	return role === 'retailer' ? (
		<div className="level-left">
			<span className="level-item">
				<Link to={`edit/${listingId}`} className="icon has-text-info">
					<i className="far fa-edit fa-lg" />
				</Link>
			</span>
			<span onClick={() => deleteListing(listingId)} className="level-item">
				<span className="icon has-text-danger">
					<i className="far fa-trash-alt fa-lg" />
				</span>
			</span>
		</div>
	) : (
		<div className="level-left">
			<span className="level-item">
				<span className="icon has-text-info">
					<i className="far fa-envelope fa-lg" />
				</span>
			</span>
			<span className="level-item">
				<span className="icon has-text-danger">
					<i className="far fa-heart fa-lg" />
				</span>
			</span>
		</div>
	);
};

export default connect(null, { deleteListing })(ListingMeta);
