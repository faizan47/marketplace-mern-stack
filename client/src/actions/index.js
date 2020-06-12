import { SIGN_UP, SIGN_IN, SIGN_OUT } from './types';
import axios from 'axios';

export const signUp = values => async dispatch => {
	const response = axios.post('/api/signup', values);
	dispatch({ type: SIGN_UP, payload: response.data });
};
export const signIn = values => async dispatch => {
	const response = axios.post('/api/signin', values);
	dispatch({ type: SIGN_IN, payload: response.data });
};
export const signOut = values => async dispatch => {
	const response = axios.post('/api/signout', values);
	dispatch({ type: SIGN_OUT, payload: response.data });
};
