import {
	CREATE_LISTING,
	FETCH_LISTINGS,
	FETCH_MY_LISTINGS,
	DELETE_LISTING,
	FETCH_LISTING_BY_ID,
	UPDATE_LISTING
} from './types';
import axios from 'axios';
import uploadToCloudinary from '../utils/uploadToCloudinary';
import { toast } from 'react-toastify';

export const createListing = (createListingFormData, history) => async dispatch => {
	let { images } = createListingFormData;

	const imageURLs = await uploadToCloudinary(images);
	const response = await axios.post('/api/listings', { ...createListingFormData, images: imageURLs });
	dispatch({ type: CREATE_LISTING, payload: response.data });
	history.push('/myListings');
	toast.info('Listing added successfully!');
};
export const updateListing = (updateListingFormData, history) => async dispatch => {
	let { images, _id } = updateListingFormData;
	const imageURLs = await uploadToCloudinary(images);
	const response = await axios.patch(`/api/listings/${_id}`, { ...updateListingFormData, images: imageURLs });
	dispatch({ type: UPDATE_LISTING, payload: response.data });
	history.push('/myListings');
	toast.info('Listing updated successfully!');
};
export const fetchListings = () => async dispatch => {
	const response = await axios.get('/api/listings');
	dispatch({ type: FETCH_LISTINGS, payload: response.data });
};

export const fetchMyListings = () => async dispatch => {
	const response = await axios.get('/api/listings/self');
	dispatch({ type: FETCH_MY_LISTINGS, payload: response.data });
};

export const deleteListing = listingId => async dispatch => {
	const response = await axios.delete(`/api/listings/delete/${listingId}`);
	dispatch({ type: DELETE_LISTING, payload: response.data });
	toast.info('Listing deleted successfully!');
};

export const fetchListingById = listingId => async dispatch => {
	const response = await axios.get(`/api/listings/${listingId}`);
	dispatch({ type: FETCH_LISTING_BY_ID, payload: response.data });
};
