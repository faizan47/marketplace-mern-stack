import { SIGN_UP, SIGN_IN, SIGN_OUT, FETCH_USER } from './types';
import axios from 'axios';

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
