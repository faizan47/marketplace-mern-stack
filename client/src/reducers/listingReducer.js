import { FETCH_LISTINGS, CREATE_LISTING, SEARCH_LISTINGS } from '../actions/types';

const listingReducer = (state = null, action) => {
	switch (action.type) {
		case FETCH_LISTINGS:
			return action.payload;
		case CREATE_LISTING:
			return action.payload;
		case SEARCH_LISTINGS:
			return action.payload;
		default:
			return state;
	}
};

export default listingReducer;
