import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, GET_FAVOURITES } from './types';
import axios from 'axios';

export const addToFavourites = listingId => async dispatch => {
	const response = await axios.post('/api/favourites/', { listingId });
	dispatch({ type: ADD_TO_FAVOURITES, payload: response.data });
};
export const removeFromFavourites = listingId => async dispatch => {
	const response = await axios.delete(`/api/favourites/${listingId}`);
	dispatch({ type: REMOVE_FROM_FAVOURITES, payload: response.data });
};

export const fetchFavourites = () => async dispatch => {
	const response = await axios.get(`/api/favourites/`);
	await dispatch({ type: GET_FAVOURITES, payload: response.data });
};
