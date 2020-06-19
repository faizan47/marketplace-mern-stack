import { SIGN_UP, SIGN_IN, SIGN_OUT, FETCH_USER, CREATE_LISTING } from './types';
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
	let { images } = createListingFormData;
	const imageURLs = await uploadToCloudinary(images);
	createListingFormData.images = imageURLs;
	const response = await axios.post('/api/listing', createListingFormData);
	dispatch({ type: CREATE_LISTING, payload: response.data });
	history.push('/');
};
