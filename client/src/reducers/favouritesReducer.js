import { GET_FAVOURITES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions/types';

const favouritesReducer = (state = [], action) => {
	switch (action.type) {
		case GET_FAVOURITES:
			return action.payload;
		case ADD_TO_FAVOURITES:
			return action.payload;
		case REMOVE_FROM_FAVOURITES:
			return action.payload;
		default:
			return state;
	}
};
export default favouritesReducer;
