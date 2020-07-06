import { SIGN_UP, SIGN_IN, SIGN_OUT, FETCH_USER, ADD_CREDITS, CREATE_BID } from './types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchUser = () => async dispatch => {
	const response = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: response.data });
};

export const signUp = (values, history) => async dispatch => {
	try {
		const response = await axios.post('/api/signup', values);
		dispatch({ type: SIGN_UP, payload: response.data });
		history.push('/');
	} catch (error) {
		toast.error(error.response.data.message);
	}
};
export const signIn = (values, history) => async dispatch => {
	try {
		const response = await axios.post('/api/signin', values);
		dispatch({ type: SIGN_IN, payload: response.data });
		history.push('/');
		toast.success('You are now signed in!');
	} catch (error) {
		toast.error(error.response.data.message);
	}
};
export const signOut = history => async dispatch => {
	await axios.get('/api/signout');
	dispatch({ type: SIGN_OUT, payload: false });
	history.push('/');
	toast.info('Your are now signed out!');
};

export const updateCredits = paymentId => async dispatch => {
	const response = await axios.post('/api/updateCredits', { paymentId });
	dispatch({ type: ADD_CREDITS, payload: response.data });
	toast.success('Credits added successfuly!');
};

export const createBid = () => async dispatch => {
	const response = await axios.post('/api/updateCredits', {});
	dispatch({ type: CREATE_BID, payload: response.data });
};
