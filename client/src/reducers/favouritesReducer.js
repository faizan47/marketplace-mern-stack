import { GET_FAVOURITES } from '../actions/types';

const favouritesReducer = (state = [], action) => {
	switch (action.type) {
		case GET_FAVOURITES:
			return action.payload;
		default:
			return state;
	}
};
export default favouritesReducer;
