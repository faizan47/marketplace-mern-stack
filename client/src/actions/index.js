import {
	SIGN_UP,
	SIGN_IN,
	SIGN_OUT,
	FETCH_USER,
	CREATE_LISTING,
	FETCH_LISTINGS,
	FETCH_MY_LISTINGS,
	DELETE_LISTING,
	FETCH_LISTING_BY_ID,
	UPDATE_LISTING
} from './types';
import axios from 'axios';
import uploadToCloudinary from '../utils/uploadToCloudinary';

export const fetchUser = () => async dispatch => {
	const response = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: response.data });
};

export const signUp = (values, history) => async dispatch => {
	const response = await axios.post('/api/signup', values);
	dispatch({ type: SIGN_UP, payload: response.data });
	history.push('/');
};
export const signIn = (values, history) => async dispatch => {
	const response = await axios.post('/api/signin', values);
	dispatch({ type: SIGN_IN, payload: response.data });
	history.push('/');
};
export const signOut = history => async dispatch => {
	await axios.get('/api/signout');
	dispatch({ type: SIGN_OUT, payload: false });
	history.push('/');
};

export const createListing = (createListingFormData, history) => async dispatch => {
	let { images } = createListingFormData || {};
	const imageURLs = await uploadToCloudinary(images);
	const response = await axios.post('/api/listings', { ...createListingFormData, images: imageURLs });
	dispatch({ type: CREATE_LISTING, payload: response.data });
	history.push('/myListings');
};
export const updateListing = (updateListingFormData, history) => async dispatch => {
	let { images, _id } = updateListingFormData;
	const imageURLs = await uploadToCloudinary(images);
	const response = await axios.patch(`/api/listings/${_id}`, { ...updateListingFormData, images: imageURLs });
	dispatch({ type: UPDATE_LISTING, payload: response.data });
	history.push('/myListings');
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
};

export const fetchListingById = listingId => async dispatch => {
	const response = await axios.get(`/api/listings/${listingId}`);
	dispatch({ type: FETCH_LISTING_BY_ID, payload: response.data });
};
